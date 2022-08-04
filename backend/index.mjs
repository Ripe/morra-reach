import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const reach = loadStdlib(process.env);

const standardToAtomic = reach.parseCurrency;
const atomicToStandard = (amount) => reach.formatCurrency(amount, 4);
const getBalance = async (who) => atomicToStandard(await reach.balanceOf(who));

const [accountDeployer, accountAttacher] = await reach.newTestAccounts(
  2,
  standardToAtomic(100)
);

const contractDeployer = accountDeployer.contract(backend);

const contractAttacher = accountAttacher.contract(
  backend,
  contractDeployer.getInfo()
);

(async () => {
  const startBalanceDeployer = await getBalance(accountDeployer);
  const startBalanceAttacher = await getBalance(accountAttacher);

  const shared = (who) => ({
    ...reach.hasRandom,
    getChoice: async (round) => {
      const myHand = Math.floor(Math.random() * 5);
      const theirHand = Math.floor(Math.random() * 5);
      const myGuess = myHand + theirHand;

      if (round > 0) {
        console.log(`${who} observed a draw. Playing new hand...`);
      }

      console.log(
        `${who} playing hand of ${myHand} fingers and guess of ${myGuess}.`
      );

      return [myHand, myGuess];
    },
    onResult: (myChoice, theirChoice, payout) => {
      const myFingers = reach.bigNumberToNumber(myChoice[0]);
      const theirFingers = reach.bigNumberToNumber(theirChoice[0]);
      const myGuess = reach.bigNumberToNumber(myChoice[1]);
      const theirGuess = reach.bigNumberToNumber(theirChoice[1]);

      const winningGuess = myFingers + theirFingers;
      const isWin = myGuess === winningGuess;
      const theyWin = theirGuess === winningGuess;
      const isDraw = (isWin && theyWin) || (!isWin && !theyWin);
      const winnings = `${atomicToStandard(payout)} ${reach.standardUnit}`;

      if (isDraw) {
        console.log(`${who} observed a draw and received ${winnings} back.`);
      } else if (isWin) {
        console.log(
          `${who} observed they win by guessing ${myGuess} and won ${winnings}!`
        );
      } else if (theyWin) {
        console.log(
          `${who} observed they lost by guessing ${myGuess}. Opponent correctly guessed ${theirGuess} as the total.`
        );
      }
    },
    onTimeout: () => {
      console.log("There was a timeout.");
    },
  });

  await Promise.all([
    backend.Deployer(contractDeployer, {
      ...shared("Deployer"),
      wager: standardToAtomic(50),
      deadline: 30,
      maxRounds: 5,
    }),
    backend.Attacher(contractAttacher, {
      ...shared("Attacher"),
      acceptWager: (wager) => {
        console.log(`Attacher accepted wager of ${atomicToStandard(wager)}.`);
      },
    }),
  ]);

  const endBalanceDeployer = await getBalance(accountDeployer);
  const endBalanceAttacher = await getBalance(accountAttacher);

  console.log(
    `Deployer went from ${startBalanceDeployer} to ${endBalanceDeployer}.`
  );

  console.log(
    `Attacher went from ${startBalanceAttacher} to ${endBalanceAttacher}.`
  );
})();
