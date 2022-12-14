"reach 0.1";

const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const shared = {
  ...hasRandom,
  getChoice: Fun([UInt, UInt], Tuple(UInt, UInt)),
  onTimeout: Fun([], Null),
  onResult: Fun([Tuple(UInt, UInt), Tuple(UInt, UInt), UInt], Null),
};

const checkOutcome = ([handA, guessA], [handB, guessB]) => {
  if (guessA == guessB) {
    return DRAW;
  } else if (handA + handB == guessA) {
    return A_WINS;
  } else if (handA + handB == guessB) {
    return B_WINS;
  } else {
    return DRAW;
  }
};

assert(checkOutcome([2, 5], [3, 7]) == A_WINS);
assert(checkOutcome([5, 7], [2, 7]) == DRAW);
assert(checkOutcome([5, 8], [5, 10]) == B_WINS);

forall(UInt, (handA) =>
  forall(UInt, (handB) =>
    forall(UInt, (guessA) =>
      forall(UInt, (guessB) =>
        assert(isOutcome(checkOutcome([handA, guessA], [handB, guessB])))
      )
    )
  )
);

export const main = Reach.App(() => {
  const A = Participant("Deployer", {
    ...shared,
    deadline: UInt,
    wager: UInt,
    maxRounds: UInt,
  });

  const B = Participant("Attacher", {
    ...shared,
    acceptWager: Fun([UInt], Null),
  });

  init();

  const notifyTimeout = () => {
    each([A, B], () => {
      interact.onTimeout();
    });
  };

  A.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
    const maxRounds = declassify(interact.maxRounds);
  });

  A.publish(deadline, wager, maxRounds).pay(wager);

  commit();

  B.only(() => {
    interact.acceptWager(wager);
  });

  B.publish()
    .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(A, notifyTimeout));

  var [outcome, round, lastChoiceA, lastChoiceB] = [DRAW, 0, [0, 0], [0, 0]];

  invariant(balance() == 2 * wager && isOutcome(outcome));

  while (outcome == DRAW && round < maxRounds) {
    commit();

    A.only(() => {
      const _choiceA = interact.getChoice(round, maxRounds);
      const [_commitA, _saltA] = makeCommitment(interact, _choiceA);
      const commitA = declassify(_commitA);
    });

    A.publish(commitA).timeout(relativeTime(deadline), () =>
      closeTo(B, notifyTimeout)
    );

    commit();

    unknowable(B, A(_choiceA, _saltA));

    B.only(() => {
      const choiceB = declassify(interact.getChoice(round, maxRounds));
    });

    B.publish(choiceB).timeout(relativeTime(deadline), () =>
      closeTo(A, notifyTimeout)
    );

    commit();

    A.only(() => {
      const [saltA, choiceA] = declassify([_saltA, _choiceA]);
    });

    A.publish(saltA, choiceA).timeout(relativeTime(deadline), () =>
      closeTo(B, notifyTimeout)
    );

    checkCommitment(commitA, saltA, choiceA);

    [outcome, round, lastChoiceA, lastChoiceB] = [
      checkOutcome(choiceA, choiceB),
      round + 1,
      choiceA,
      choiceB,
    ];

    continue;
  }

  const [forA, forB] =
    outcome === A_WINS ? [2, 0] : outcome === B_WINS ? [0, 2] : [1, 1];
  const payoutA = forA * wager;
  const payoutB = forB * wager;

  transfer(payoutA).to(A);
  transfer(payoutB).to(B);

  commit();

  A.only(() => {
    interact.onResult(lastChoiceA, lastChoiceB, payoutA);
  });

  B.only(() => {
    interact.onResult(lastChoiceB, lastChoiceA, payoutB);
  });

  exit();
});
