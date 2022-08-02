// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1]);
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc1, ctc0, ctc1, ctc1, ctc2, ctc3, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Attacher(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Attacher expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Attacher expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Tuple([ctc0, ctc3]);
  const ctc5 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v343, v344, v345], secs: v347, time: v346, didSend: v58, from: v342 } = txn1;
  ;
  const v356 = stdlib.add(v346, v343);
  stdlib.protect(ctc1, await interact.acceptWager(v344), {
    at: './index.rsh:70:25:application',
    fs: ['at ./index.rsh:69:9:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v342, v343, v344, v345, v356],
    evt_cnt: 0,
    funcNum: 1,
    lct: v346,
    onlyIf: true,
    out_tys: [],
    pay: [v344, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v362, time: v361, didSend: v67, from: v360 } = txn2;
      
      const v364 = stdlib.add(v344, v344);
      sim_r.txns.push({
        amt: v344,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v365 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v367 = v365;
      const v368 = v365;
      const v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v370 = stdlib.checkedBigNumberify('./index.rsh:77:59:decimal', stdlib.UInt_max, '0');
      const v371 = v361;
      const v378 = v364;
      
      if (await (async () => {
        const v386 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        const v387 = stdlib.lt(v370, v345);
        const v388 = v386 ? v387 : false;
        
        return v388;})()) {
        const v395 = stdlib.add(v371, v343);
        sim_r.isHalt = false;
        }
      else {
        const v511 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        const v512 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v515 = v512 ? v513 : v514;
        const v516 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v517 = v511 ? v516 : v515;
        const v518 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '0')];
        const v519 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '1')];
        const v520 = stdlib.mul(v518, v344);
        const v521 = stdlib.mul(v519, v344);
        sim_r.txns.push({
          kind: 'from',
          to: v342,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v360,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v356],
    tys: [ctc5, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v342, v343, v344, v345, v356],
      evt_cnt: 0,
      funcNum: 2,
      lct: v346,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v546, time: v545, didSend: v292, from: v544 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v342,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v546, time: v545, didSend: v292, from: v544 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.onTimeout(), {
      at: './index.rsh:55:25:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:75:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'onTimeout',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v362, time: v361, didSend: v67, from: v360 } = txn2;
    const v364 = stdlib.add(v344, v344);
    ;
    const v365 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    let v367 = v365;
    let v368 = v365;
    let v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v370 = stdlib.checkedBigNumberify('./index.rsh:77:59:decimal', stdlib.UInt_max, '0');
    let v371 = v361;
    let v378 = v364;
    
    while (await (async () => {
      const v386 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v387 = stdlib.lt(v370, v345);
      const v388 = v386 ? v387 : false;
      
      return v388;})()) {
      const v395 = stdlib.add(v371, v343);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v395],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v342, v343, v344, v345, v360, v370, v378, v395],
          evt_cnt: 0,
          funcNum: 5,
          lct: v371,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v495, time: v494, didSend: v226, from: v493 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v495, time: v494, didSend: v226, from: v493 } = txn4;
        ;
        const v496 = stdlib.addressEq(v360, v493);
        const v497 = stdlib.addressEq(v342, v493);
        const v498 = v496 ? true : v497;
        stdlib.assert(v498, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:91:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc1, await interact.onTimeout(), {
          at: './index.rsh:55:25:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:91:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'onTimeout',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v406], secs: v408, time: v407, didSend: v102, from: v405 } = txn3;
        ;
        const v409 = stdlib.addressEq(v342, v405);
        stdlib.assert(v409, {
          at: './index.rsh:90:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        const v416 = stdlib.add(v407, v343);
        const v420 = stdlib.protect(ctc3, await interact.getChoice(v370, v345), {
          at: './index.rsh:99:52:application',
          fs: ['at ./index.rsh:98:11:application call to [unknown function] (defined at: ./index.rsh:98:15:function exp)'],
          msg: 'getChoice',
          who: 'Attacher'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v342, v343, v344, v345, v360, v370, v378, v406, v416, v420],
          evt_cnt: 1,
          funcNum: 6,
          lct: v407,
          onlyIf: true,
          out_tys: [ctc3],
          pay: [stdlib.checkedBigNumberify('./index.rsh:102:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v424], secs: v426, time: v425, didSend: v114, from: v423 } = txn4;
            
            ;
            const v434 = stdlib.add(v425, v343);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v416],
          tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc2, ctc0, ctc3],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v342, v343, v344, v345, v360, v370, v378, v406, v416],
            evt_cnt: 0,
            funcNum: 7,
            lct: v407,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v477, time: v476, didSend: v192, from: v475 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v477, time: v476, didSend: v192, from: v475 } = txn5;
          ;
          const v478 = stdlib.addressEq(v360, v475);
          const v479 = stdlib.addressEq(v342, v475);
          const v480 = v478 ? true : v479;
          stdlib.assert(v480, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:103:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
            });
          ;
          stdlib.protect(ctc1, await interact.onTimeout(), {
            at: './index.rsh:55:25:application',
            fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:103:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'onTimeout',
            who: 'Attacher'
            });
          
          return;
          
          }
        else {
          const {data: [v424], secs: v426, time: v425, didSend: v114, from: v423 } = txn4;
          ;
          const v427 = stdlib.addressEq(v360, v423);
          stdlib.assert(v427, {
            at: './index.rsh:102:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
            });
          const v434 = stdlib.add(v425, v343);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc3],
            timeoutAt: ['time', v434],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v342, v343, v344, v345, v360, v370, v378, v406, v424, v434],
              evt_cnt: 0,
              funcNum: 9,
              lct: v425,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v459, time: v458, didSend: v158, from: v457 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc2, ctc3, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v459, time: v458, didSend: v158, from: v457 } = txn6;
            ;
            const v460 = stdlib.addressEq(v360, v457);
            const v461 = stdlib.addressEq(v342, v457);
            const v462 = v460 ? true : v461;
            stdlib.assert(v462, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Attacher'
              });
            ;
            stdlib.protect(ctc1, await interact.onTimeout(), {
              at: './index.rsh:55:25:application',
              fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'onTimeout',
              who: 'Attacher'
              });
            
            return;
            
            }
          else {
            const {data: [v439, v440], secs: v442, time: v441, didSend: v124, from: v438 } = txn5;
            ;
            const v443 = stdlib.addressEq(v342, v438);
            stdlib.assert(v443, {
              at: './index.rsh:112:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Attacher'
              });
            const v444 = stdlib.digest(ctc4, [v439, v440]);
            const v445 = stdlib.digestEq(v406, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:116:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Attacher'
              });
            const v446 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
            const v447 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
            const v448 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
            const v449 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
            let v450;
            const v451 = stdlib.eq(v447, v449);
            if (v451) {
              v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v452 = stdlib.add(v446, v448);
              const v453 = stdlib.eq(v452, v447);
              if (v453) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v455 = stdlib.eq(v452, v449);
                if (v455) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v456 = stdlib.add(v370, stdlib.checkedBigNumberify('./index.rsh:120:15:decimal', stdlib.UInt_max, '1'));
            const cv367 = v440;
            const cv368 = v424;
            const cv369 = v450;
            const cv370 = v456;
            const cv371 = v441;
            const cv378 = v378;
            
            v367 = cv367;
            v368 = cv368;
            v369 = cv369;
            v370 = cv370;
            v371 = cv371;
            v378 = cv378;
            
            continue;}
          
          }
        
        }
      
      }
    const v511 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v515 = v512 ? v513 : v514;
    const v516 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v517 = v511 ? v516 : v515;
    const v518 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '0')];
    const v519 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '1')];
    const v520 = stdlib.mul(v518, v344);
    const v521 = stdlib.mul(v519, v344);
    ;
    ;
    stdlib.protect(ctc1, await interact.onResult(v368, v367, v521), {
      at: './index.rsh:143:22:application',
      fs: ['at ./index.rsh:142:9:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
      msg: 'onResult',
      who: 'Attacher'
      });
    
    return;
    }
  
  
  
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  
  
  const v337 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v338 = stdlib.protect(ctc0, interact.maxRounds, 'for Deployer\'s interact field maxRounds');
  const v339 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v337, v339, v338],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:65:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [v339, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v343, v344, v345], secs: v347, time: v346, didSend: v58, from: v342 } = txn1;
      
      sim_r.txns.push({
        amt: v344,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v356 = stdlib.add(v346, v343);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v343, v344, v345], secs: v347, time: v346, didSend: v58, from: v342 } = txn1;
  ;
  const v356 = stdlib.add(v346, v343);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v356],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v342, v343, v344, v345, v356],
      evt_cnt: 0,
      funcNum: 2,
      lct: v346,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v546, time: v545, didSend: v292, from: v544 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v342,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc5, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v546, time: v545, didSend: v292, from: v544 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.onTimeout(), {
      at: './index.rsh:55:25:application',
      fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:75:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'onTimeout',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v362, time: v361, didSend: v67, from: v360 } = txn2;
    const v364 = stdlib.add(v344, v344);
    ;
    const v365 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    let v367 = v365;
    let v368 = v365;
    let v369 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v370 = stdlib.checkedBigNumberify('./index.rsh:77:59:decimal', stdlib.UInt_max, '0');
    let v371 = v361;
    let v378 = v364;
    
    while (await (async () => {
      const v386 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      const v387 = stdlib.lt(v370, v345);
      const v388 = v386 ? v387 : false;
      
      return v388;})()) {
      const v395 = stdlib.add(v371, v343);
      const v399 = stdlib.protect(ctc1, await interact.getChoice(v370, v345), {
        at: './index.rsh:85:42:application',
        fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
        msg: 'getChoice',
        who: 'Deployer'
        });
      const v402 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:86:48:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
        msg: 'random',
        who: 'Deployer'
        });
      const v403 = stdlib.digest(ctc2, [v402, v399]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v342, v343, v344, v345, v360, v370, v378, v395, v403],
        evt_cnt: 1,
        funcNum: 4,
        lct: v371,
        onlyIf: true,
        out_tys: [ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:90:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v406], secs: v408, time: v407, didSend: v102, from: v405 } = txn3;
          
          ;
          const v416 = stdlib.add(v407, v343);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v395],
        tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v342, v343, v344, v345, v360, v370, v378, v395],
          evt_cnt: 0,
          funcNum: 5,
          lct: v371,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v495, time: v494, didSend: v226, from: v493 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v360,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v495, time: v494, didSend: v226, from: v493 } = txn4;
        ;
        const v496 = stdlib.addressEq(v360, v493);
        const v497 = stdlib.addressEq(v342, v493);
        const v498 = v496 ? true : v497;
        stdlib.assert(v498, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:91:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.onTimeout(), {
          at: './index.rsh:55:25:application',
          fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:91:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'onTimeout',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v406], secs: v408, time: v407, didSend: v102, from: v405 } = txn3;
        ;
        const v409 = stdlib.addressEq(v342, v405);
        stdlib.assert(v409, {
          at: './index.rsh:90:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v416 = stdlib.add(v407, v343);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc1],
          timeoutAt: ['time', v416],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v342, v343, v344, v345, v360, v370, v378, v406, v416],
            evt_cnt: 0,
            funcNum: 7,
            lct: v407,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v477, time: v476, didSend: v192, from: v475 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v342,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v477, time: v476, didSend: v192, from: v475 } = txn5;
          ;
          const v478 = stdlib.addressEq(v360, v475);
          const v479 = stdlib.addressEq(v342, v475);
          const v480 = v478 ? true : v479;
          stdlib.assert(v480, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:103:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.onTimeout(), {
            at: './index.rsh:55:25:application',
            fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:103:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'onTimeout',
            who: 'Deployer'
            });
          
          return;
          
          }
        else {
          const {data: [v424], secs: v426, time: v425, didSend: v114, from: v423 } = txn4;
          ;
          const v427 = stdlib.addressEq(v360, v423);
          stdlib.assert(v427, {
            at: './index.rsh:102:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v434 = stdlib.add(v425, v343);
          const txn5 = await (ctc.sendrecv({
            args: [v342, v343, v344, v345, v360, v370, v378, v406, v424, v434, v402, v399],
            evt_cnt: 2,
            funcNum: 8,
            lct: v425,
            onlyIf: true,
            out_tys: [ctc0, ctc1],
            pay: [stdlib.checkedBigNumberify('./index.rsh:112:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v439, v440], secs: v442, time: v441, didSend: v124, from: v438 } = txn5;
              
              ;
              const v446 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
              const v447 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
              const v448 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
              const v449 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
              let v450;
              const v451 = stdlib.eq(v447, v449);
              if (v451) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v452 = stdlib.add(v446, v448);
                const v453 = stdlib.eq(v452, v447);
                if (v453) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v455 = stdlib.eq(v452, v449);
                  if (v455) {
                    v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v456 = stdlib.add(v370, stdlib.checkedBigNumberify('./index.rsh:120:15:decimal', stdlib.UInt_max, '1'));
              const cv367 = v440;
              const cv368 = v424;
              const cv369 = v450;
              const cv370 = v456;
              const cv371 = v441;
              const cv378 = v378;
              
              await (async () => {
                const v367 = cv367;
                const v368 = cv368;
                const v369 = cv369;
                const v370 = cv370;
                const v371 = cv371;
                const v378 = cv378;
                
                if (await (async () => {
                  const v386 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  const v387 = stdlib.lt(v370, v345);
                  const v388 = v386 ? v387 : false;
                  
                  return v388;})()) {
                  const v395 = stdlib.add(v371, v343);
                  sim_r.isHalt = false;
                  }
                else {
                  const v511 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  const v512 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
                  const v515 = v512 ? v513 : v514;
                  const v516 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v517 = v511 ? v516 : v515;
                  const v518 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '0')];
                  const v519 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '1')];
                  const v520 = stdlib.mul(v518, v344);
                  const v521 = stdlib.mul(v519, v344);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v342,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v360,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v434],
            tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3, ctc1, ctc0, ctc0, ctc1],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v342, v343, v344, v345, v360, v370, v378, v406, v424, v434],
              evt_cnt: 0,
              funcNum: 9,
              lct: v425,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v459, time: v458, didSend: v158, from: v457 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v360,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc5, ctc0, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3, ctc1, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v459, time: v458, didSend: v158, from: v457 } = txn6;
            ;
            const v460 = stdlib.addressEq(v360, v457);
            const v461 = stdlib.addressEq(v342, v457);
            const v462 = v460 ? true : v461;
            stdlib.assert(v462, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Deployer'
              });
            ;
            stdlib.protect(ctc4, await interact.onTimeout(), {
              at: './index.rsh:55:25:application',
              fs: ['at ./index.rsh:54:9:application call to [unknown function] (defined at: ./index.rsh:54:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:53:28:function exp)', 'at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'onTimeout',
              who: 'Deployer'
              });
            
            return;
            
            }
          else {
            const {data: [v439, v440], secs: v442, time: v441, didSend: v124, from: v438 } = txn5;
            ;
            const v443 = stdlib.addressEq(v342, v438);
            stdlib.assert(v443, {
              at: './index.rsh:112:7:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Deployer'
              });
            const v444 = stdlib.digest(ctc2, [v439, v440]);
            const v445 = stdlib.digestEq(v406, v444);
            stdlib.assert(v445, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:116:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Deployer'
              });
            const v446 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
            const v447 = v440[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
            const v448 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
            const v449 = v424[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
            let v450;
            const v451 = stdlib.eq(v447, v449);
            if (v451) {
              v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              }
            else {
              const v452 = stdlib.add(v446, v448);
              const v453 = stdlib.eq(v452, v447);
              if (v453) {
                v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                }
              else {
                const v455 = stdlib.eq(v452, v449);
                if (v455) {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                  }
                else {
                  v450 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                  }
                }
              }
            const v456 = stdlib.add(v370, stdlib.checkedBigNumberify('./index.rsh:120:15:decimal', stdlib.UInt_max, '1'));
            const cv367 = v440;
            const cv368 = v424;
            const cv369 = v450;
            const cv370 = v456;
            const cv371 = v441;
            const cv378 = v378;
            
            v367 = cv367;
            v368 = cv368;
            v369 = cv369;
            v370 = cv370;
            v371 = cv371;
            v378 = cv378;
            
            continue;}
          
          }
        
        }
      
      }
    const v511 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    const v512 = stdlib.eq(v369, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v513 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v514 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
    const v515 = v512 ? v513 : v514;
    const v516 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v517 = v511 ? v516 : v515;
    const v518 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '0')];
    const v519 = v517[stdlib.checkedBigNumberify('./index.rsh:128:9:array', stdlib.UInt_max, '1')];
    const v520 = stdlib.mul(v518, v344);
    const v521 = stdlib.mul(v519, v344);
    ;
    ;
    stdlib.protect(ctc4, await interact.onResult(v367, v368, v520), {
      at: './index.rsh:139:22:application',
      fs: ['at ./index.rsh:138:9:application call to [unknown function] (defined at: ./index.rsh:138:13:function exp)'],
      msg: 'onResult',
      who: 'Deployer'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiARAAEIYAUJKAcCIDBYmAGIAWg4ECYDAQABAQAiNQAxGEEFhCpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAohJIQcMQAGDSSQMQAEqSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzggNf+ABKIFZo6wMgY0AyEMWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgScSCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf9XiBA1/kk1BUkiWzX9VwgQNfyABKxLcfc0/RZQNPxQsDIGNAMhDFsMRDT/MQASRDQDV2ggNP0WNPxQARJENPwkWzX7NP4kWzX6NPs0+hJBAAYjNflCACo0/CJbNP4iWwhJNfg0+xJBAAYiNflCABI0+DT6EkEAByEINflCAAMjNfk0/zQDIQlbNAMhBls0AyEKWzQDVzggNPw0/jT5NAMhC1sjCDIGNAMlW0IDBUghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABOIbs6mwMgY0AyENWw9ENANXOCAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgN8SYEGDEAAp0ghBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/IQlbNf4hBls1/SEKWzX8VzggNfshC1s1+iVbNflXaCA1+Ek1BTX3gATt1Z0QNPdQsDIGNAMhDVsMRDT7MQASRDIGNP4INfY0/zT+FlA0/RZQNPwWUDT7UDT6FlA0+RZQNPhQNPdQNPYWUChLAVcAf2cpSwFXfyFnSCEFNQEyBjUCQgLqSCEENAESRDQESSISTDQCEhFEKGRJNQNXOCA1/4AEzJmSXLAyBjQDIQ5bD0Q0/zEAEjQDVwAgMQASEUSxIrIBNAMlW7III7IQNP+yB7NCAn5JIQgMQADkSYEEDEAAnEghBDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpKSVcAIDX/IQlbNf4hBls1/SEKWzX8VzggNfshC1s1+iVbNflJNQU1+IAEOLAjLTT4ULAyBjQDIQ5bDEQ0/zEAEkQyBjT+CDX3NP80/hZQNP0WUDT8FlA0+1A0+hZQNPkWUDT4UDT3FlAoSwFXAH9nKUsBV38RZ0ghBzUBMgY1AkIB8CEIEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ9bD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgGTSSMMQABWSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhD1sMRDT/iAHLIRCvNf40A1cAIDQDIQlbNP80AyEKWzEANP5JIyIyBjT/SQhCAG1IgaCNBogBnSI0ARJENARJIhJMNAISEURJNQVJSSJbNf8kWzX+IRBbNf2ABPdxE000/xZQNP4WUDT9FlCwNP6IAWMyBjT/CDX8MQA0/xZQNP4WUDT9FlA0/BZQKEsBVwBAZ0gjNQEyBjUCQgDmNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TT8IxI0/TT4DBBBADc0/jT2CDX0NPU09hZQNPcWUDT4FlA0+VA0/RZQNP8WUDT0FlAoSwFXAHBnSCEENQEyBjUCQgCMgBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPwhCBJNgBAAAAAAAAAAAgAAAAAAAAAANPwiEk019LEisgE09CJbNPcLsggjshA09bIHs7EisgE09CRbNPcLsggjshA0+bIHs0IAADEZIQQSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 160,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v343",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v344",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v345",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4",
                "name": "v424",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4",
                "name": "v440",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v406",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4",
                "name": "v424",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v439",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "elem1",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T4",
                "name": "v440",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200210c3803806200210c83398101604081905262000026916200026b565b600080805543600355604080516020808201835292815281513381528451818501528484015180518285015293840151606082015292909101516080830152907fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69060a00160405180910390a16020808301510151620000aa903414600762000164565b602082015151620000bc904362000302565b81526040805160a08082018352600060208084018281528486018381526060808701858152608080890187815233808b528d8801805151885280518901518752518c015184528c518252600198899055439098558a51808801989098529451878b0152925191860191909152519084015251828401528451808303909301835260c0909101909352805191926200015a92600292909101906200018e565b5050505062000366565b816200018a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200019c9062000329565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b604051606081016001600160401b03811182821017156200026557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027f57600080fd5b604080519081016001600160401b0381118282101715620002b057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002ca57600080fd5b620002d462000234565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600082198211156200032457634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200033e57607f821691505b602082108114156200036057634e487b7160e01b600052602260045260246000fd5b50919050565b611d9680620003766000396000f3fe60806040526004361061009a5760003560e01c8063832307571161006157806383230757146101135780638e31476914610128578063a209ad4e1461013b578063ab53f2c61461014e578063bf2c5b2414610171578063de7369981461018457005b80631770d96c146100a35780631e93b0f1146100b65780632c10a159146100da5780633cbee2af146100ed5780637eea518c1461010057005b366100a157005b005b6100a16100b1366004611729565b610197565b3480156100c257600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100e8366004611753565b610463565b6100a16100fb366004611776565b610649565b6100a161010e366004611753565b610879565b34801561011f57600080fd5b506001546100c7565b6100a1610136366004611753565b6109f7565b6100a1610149366004611753565b610b92565b34801561015a57600080fd5b50610163610e2c565b6040516100d1929190611788565b6100a161017f366004611753565b610ec9565b6100a1610192366004611753565b611061565b6101a760096000541460276111b8565b6101c1813515806101ba57506001548235145b60286111b8565b6000808055600280546101d3906117e5565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff906117e5565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b505050505080602001905181019061026491906118fd565b9050610283604051806040016040528060008152602001600081525090565b610295826101200151431060296111b8565b7f712449bbded5aa157cb3791d1d5203045cb468e42e4ba0d9e0b79495d578442633846040516102c6929190611997565b60405180910390a16102da341560246111b8565b81516102f2906001600160a01b0316331460256111b8565b604080516103349161030e9160208088013592880191016119d5565b6040516020818303038152906040528051906020012060001c8360e001511460266111b8565b610100820151602001516060840135141561035257600181526103a5565b61010082015151610367906040850135611a09565b602082018190526060840135141561038257600081526103a5565b81610100015160200151816020015114156103a057600281526103a5565b600181525b6103ad611498565b825181516001600160a01b03918216905260208085015183519091015260408085015183518201526060808601518451909101526080808601518451931692019190915261040390368690038601908601611a21565b6020808301805192909252610100850151825190910152825190516040015260a083015161043390600190611a09565b6020820180516060019190915280514360809091015260c0840151905160a0015261045d816111dd565b50505050565b61047360016000541460096111b8565b61048d8135158061048657506001548235145b600a6111b8565b60008080556002805461049f906117e5565b80601f01602080910402602001604051908101604052809291908181526020018280546104cb906117e5565b80156105185780601f106104ed57610100808354040283529160200191610518565b820191906000526020600020905b8154815290600101906020018083116104fb57829003601f168201915b50505050508060200190518101906105309190611a7e565b9050610552604080516060810182526000602082018181529282015290815290565b61056382608001514310600b6111b8565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13384604051610594929190611b01565b60405180910390a16105ad8260400151341460086111b8565b80516000908190528151602001526105c3611498565b825181516001600160a01b03909116905260208084015182518201526040808501805184518301526060808701518551820152845133608091820152865185870180519190915287518151909601959095528451600194019390935283516000910152915143910152516106379080611a09565b602082015160a0015261045d816111dd565b610659600760005414601c6111b8565b6106738135158061066c57506001548235145b601d6111b8565b600080805560028054610685906117e5565b80601f01602080910402602001604051908101604052809291908181526020018280546106b1906117e5565b80156106fe5780601f106106d3576101008083540402835291602001916106fe565b820191906000526020600020905b8154815290600101906020018083116106e157829003601f168201915b50505050508060200190518101906107169190611b3e565b905061072e6040518060200160405280600081525090565b6107408261010001514310601e6111b8565b7f4379e1c9cae4e6429975191435b831d744ce43afea8a1c349f14e042526dae033384604051610771929190611bc7565b60405180910390a16107853415601a6111b8565b60808201516107a0906001600160a01b03163314601b6111b8565b60208201516107af9043611a09565b81526107b96114db565b82516001600160a01b0390811682526020808501518184015260408086015190840152606080860151908401526080808601519092169183019190915260a0808501519083015260c0808501519083015260e0808501519083015261082690368690038601908601611a21565b610100820152815161012082015260096000554360015560405161084e908290602001611bfb565b6040516020818303038152906040526002908051906020019061087292919061155b565b5050505050565b610889600160005414600d6111b8565b6108a38135158061089c57506001548235145b600e6111b8565b6000808055600280546108b5906117e5565b80601f01602080910402602001604051908101604052809291908181526020018280546108e1906117e5565b801561092e5780601f106109035761010080835404028352916020019161092e565b820191906000526020600020905b81548152906001019060200180831161091157829003601f168201915b50505050508060200190518101906109469190611a7e565b905061095a8160800151431015600f6111b8565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161098b929190611b01565b60405180910390a161099f3415600c6111b8565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109dc573d6000803e3d6000fd5b50600080805560018190556109f3906002906115df565b5050565b610a0760056000541460176111b8565b610a2181351580610a1a57506001548235145b60186111b8565b600080805560028054610a33906117e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5f906117e5565b8015610aac5780601f10610a8157610100808354040283529160200191610aac565b820191906000526020600020905b815481529060010190602001808311610a8f57829003601f168201915b5050505050806020019051810190610ac49190611c95565b9050610ad88160e0015143101560196111b8565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610b09929190611b01565b60405180910390a1610b1d341560156111b8565b6080810151610b51906001600160a01b03163314610b475781516001600160a01b03163314610b4a565b60015b60166111b8565b80608001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f193505050501580156109dc573d6000803e3d6000fd5b610ba260056000541460126111b8565b610bbc81351580610bb557506001548235145b60136111b8565b600080805560028054610bce906117e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfa906117e5565b8015610c475780601f10610c1c57610100808354040283529160200191610c47565b820191906000526020600020905b815481529060010190602001808311610c2a57829003601f168201915b5050505050806020019051810190610c5f9190611c95565b9050610c776040518060200160405280600081525090565b610c888260e00151431060146111b8565b6040805133815284356020808301919091528501358183015290517f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc09181900360600190a1610cd9341560106111b8565b8151610cf1906001600160a01b0316331460116111b8565b6020820151610d009043611a09565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151908501526080808701519093169284019290925260a0808601519084015260c080860151908401528581013560e08401528351610100840152600760005543600155905161084e9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b600060606000546002808054610e41906117e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6d906117e5565b8015610eba5780601f10610e8f57610100808354040283529160200191610eba565b820191906000526020600020905b815481529060010190602001808311610e9d57829003601f168201915b50505050509050915091509091565b610ed960076000541460216111b8565b610ef381351580610eec57506001548235145b60226111b8565b600080805560028054610f05906117e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610f31906117e5565b8015610f7e5780601f10610f5357610100808354040283529160200191610f7e565b820191906000526020600020905b815481529060010190602001808311610f6157829003601f168201915b5050505050806020019051810190610f969190611b3e565b9050610fab81610100015143101560236111b8565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610fdc929190611b01565b60405180910390a1610ff03415601f6111b8565b6080810151611024906001600160a01b0316331461101a5781516001600160a01b0316331461101d565b60015b60206111b8565b805160c08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109dc573d6000803e3d6000fd5b611071600960005414602c6111b8565b61108b8135158061108457506001548235145b602d6111b8565b60008080556002805461109d906117e5565b80601f01602080910402602001604051908101604052809291908181526020018280546110c9906117e5565b80156111165780601f106110eb57610100808354040283529160200191611116565b820191906000526020600020905b8154815290600101906020018083116110f957829003601f168201915b505050505080602001905181019061112e91906118fd565b9050611143816101200151431015602e6111b8565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611174929190611b01565b60405180910390a16111883415602a6111b8565b6080810151610b51906001600160a01b031633146111b25781516001600160a01b031633146111b5565b60015b602b5b816109f35760405163100960cb60e01b81526004810182905260240160405180910390fd5b6111e561161c565b6001826020015160400151146111fc576000611210565b816000015160600151826020015160600151105b15611379578160000151602001518260200151608001516112319190611a09565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101919091528251516001600160a01b03908116825283516020908101518184015284516040908101518185015285516060908101518186015286516080908101519094169385019390935281860180519093015160a08086019190915292519092015160c0840152835160e084015260056000554360015590516113559183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152606084015160608401528060808501511660808401525060a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061045d92919061155b565b6020808201805160009081905290516002908301819052604080850180516001908190529051850152606085018051929092529051830191909152908301510151156113e3576002826020015160400151146113d95780604001516113e9565b80602001516113e9565b80606001515b608082018190528251805160409091015191516001600160a01b03909116916108fc916114169190611d41565b6040518115909202916000818181858888f1935050505015801561143e573d6000803e3d6000fd5b508160000151608001516001600160a01b03166108fc8360000151604001518360800151602001516114709190611d41565b6040518115909202916000818181858888f193505050501580156109dc573d6000803e3d6000fd5b6040805160e0810182526000918101828152606082018390526080820183905260a0820183905260c0820192909252908152602081016114d66116b1565b905290565b60405180610140016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200161154e604051806040016040528060008152602001600081525090565b8152602001600081525090565b828054611567906117e5565b90600052602060002090601f01602090048101928261158957600085556115cf565b82601f106115a257805160ff19168380011785556115cf565b828001600101855582156115cf579182015b828111156115cf5782518255916020019190600101906115b4565b506115db929150611714565b5090565b5080546115eb906117e5565b6000825580601f106115fb575050565b601f0160209004906000526020600020908101906116199190611714565b50565b6040518060a001604052806000815260200161164b604051806040016040528060008152602001600081525090565b815260200161166d604051806040016040528060008152602001600081525090565b815260200161168f604051806040016040528060008152602001600081525090565b81526020016114d6604051806040016040528060008152602001600081525090565b604080516101008101909152600060c0820181815260e0830191909152819081526020016116f2604051806040016040528060008152602001600081525090565b8152602001600081526020016000815260200160008152602001600081525090565b5b808211156115db5760008155600101611715565b60006080828403121561173b57600080fd5b50919050565b60006040828403121561173b57600080fd5b60006040828403121561176557600080fd5b61176f8383611741565b9392505050565b60006060828403121561173b57600080fd5b82815260006020604081840152835180604085015260005b818110156117bc578581018301518582016060015282016117a0565b818111156117ce576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806117f957607f821691505b6020821081141561173b57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561184c57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff8111828210171561184c57634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461189b57600080fd5b919050565b6000604082840312156118b257600080fd5b6040516040810181811067ffffffffffffffff821117156118e357634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b6000610160828403121561191057600080fd5b61191861181a565b61192183611884565b815260208301516020820152604083015160408201526060830151606082015261194d60808401611884565b608082015260a083015160a082015260c083015160c082015260e083015160e082015261010061197f858286016118a0565b90820152610140929092015161012083015250919050565b600060a08201905060018060a01b0384168252823560208301526020830135604083015261176f606083016040850180358252602090810135910152565b8281526060810161176f602083018480358252602090810135910152565b634e487b7160e01b600052601160045260246000fd5b60008219821115611a1c57611a1c6119f3565b500190565b600060408284031215611a3357600080fd5b6040516040810181811067ffffffffffffffff82111715611a6457634e487b7160e01b600052604160045260246000fd5b604052823581526020928301359281019290925250919050565b600060a08284031215611a9057600080fd5b60405160a0810181811067ffffffffffffffff82111715611ac157634e487b7160e01b600052604160045260246000fd5b604052611acd83611884565b8152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b6001600160a01b038316815281356020808301919091526060820190830135801515808214611b2f57600080fd5b80604085015250509392505050565b60006101208284031215611b5157600080fd5b611b59611852565b611b6283611884565b8152602083015160208201526040830151604082015260608301516060820152611b8e60808401611884565b608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b6001600160a01b0383168152813560208083019190915282013560408083019190915282013560608201526080810161176f565b81516001600160a01b0316815261016081016020830151602083015260408301516040830152606083015160608301526080830151611c4560808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e083015160e083015261010080840151611c818285018280518252602090810151910152565b505061012083015161014083015292915050565b6000610100808385031215611ca957600080fd5b6040519081019067ffffffffffffffff82118183101715611cda57634e487b7160e01b600052604160045260246000fd5b81604052611ce784611884565b8152602084015160208201526040840151604082015260608401516060820152611d1360808501611884565b608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6000816000190483118215151615611d5b57611d5b6119f3565b50029056fea26469706673582212201722e1e6a1da88728cda5c71f2bbee35066f950cbd1c4dc2474e9022da1d0e2f64736f6c634300080c0033`,
  BytecodeLen: 8460,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:67:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:75:51:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:136:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:82:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:91:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:94:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:103:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:106:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:113:14:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Attacher": Attacher,
  "Deployer": Deployer
  };
export const _APIs = {
  };
