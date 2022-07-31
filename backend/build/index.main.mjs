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
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      7: [ctc0, ctc1, ctc0, ctc1, ctc2, ctc3, ctc1],
      9: [ctc0, ctc1, ctc0, ctc3, ctc3]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc5 = stdlib.T_Address;
  
  
  const v321 = stdlib.protect(ctc1, interact.choice, 'for Attacher\'s interact field choice');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v327, v328], secs: v330, time: v329, didSend: v62, from: v326 } = txn1;
  ;
  const v339 = stdlib.add(v329, v327);
  stdlib.protect(ctc2, await interact.acceptWager(v328), {
    at: './index.rsh:68:25:application',
    fs: ['at ./index.rsh:67:9:application call to [unknown function] (defined at: ./index.rsh:67:13:function exp)'],
    msg: 'acceptWager',
    who: 'Attacher'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v326, v327, v328, v339],
    evt_cnt: 0,
    funcNum: 1,
    lct: v329,
    onlyIf: true,
    out_tys: [],
    pay: [v328, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v345, time: v344, didSend: v71, from: v343 } = txn2;
      
      const v347 = stdlib.add(v328, v328);
      sim_r.txns.push({
        amt: v328,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v357 = stdlib.add(v344, v327);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v339],
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v326, v327, v328, v339],
      evt_cnt: 0,
      funcNum: 2,
      lct: v329,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v507, time: v506, didSend: v280, from: v505 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v326,
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
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v507, time: v506, didSend: v280, from: v505 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.onTimeout(), {
      at: './index.rsh:54:25:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:72:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'onTimeout',
      who: 'Attacher'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v345, time: v344, didSend: v71, from: v343 } = txn2;
    const v347 = stdlib.add(v328, v328);
    ;
    const v357 = stdlib.add(v344, v327);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: ['time', v357],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v326, v327, v328, v343, v347, v357],
        evt_cnt: 0,
        funcNum: 4,
        lct: v344,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v489, time: v488, didSend: v249, from: v487 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v343,
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
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v489, time: v488, didSend: v249, from: v487 } = txn4;
      ;
      const v490 = stdlib.addressEq(v343, v487);
      const v491 = stdlib.addressEq(v326, v487);
      const v492 = v490 ? true : v491;
      stdlib.assert(v492, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:86:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Attacher'
        });
      ;
      stdlib.protect(ctc2, await interact.onTimeout(), {
        at: './index.rsh:54:25:application',
        fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:86:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'onTimeout',
        who: 'Attacher'
        });
      
      return;
      
      }
    else {
      const {data: [v365], secs: v367, time: v366, didSend: v87, from: v364 } = txn3;
      ;
      const v368 = stdlib.addressEq(v326, v364);
      stdlib.assert(v368, {
        at: './index.rsh:85:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Attacher'
        });
      const v375 = stdlib.add(v366, v327);
      const txn4 = await (ctc.sendrecv({
        args: [v326, v327, v328, v343, v347, v365, v375, v321],
        evt_cnt: 1,
        funcNum: 5,
        lct: v366,
        onlyIf: true,
        out_tys: [ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:97:5:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v380], secs: v382, time: v381, didSend: v96, from: v379 } = txn4;
          
          ;
          const v390 = stdlib.add(v381, v327);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v375],
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc0, ctc1],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v326, v327, v328, v343, v347, v365, v375],
          evt_cnt: 0,
          funcNum: 6,
          lct: v366,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v471, time: v470, didSend: v215, from: v469 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v326,
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
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v471, time: v470, didSend: v215, from: v469 } = txn5;
        ;
        const v472 = stdlib.addressEq(v343, v469);
        const v473 = stdlib.addressEq(v326, v469);
        const v474 = v472 ? true : v473;
        stdlib.assert(v474, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:98:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Attacher'
          });
        ;
        stdlib.protect(ctc2, await interact.onTimeout(), {
          at: './index.rsh:54:25:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:98:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'onTimeout',
          who: 'Attacher'
          });
        
        return;
        
        }
      else {
        const {data: [v380], secs: v382, time: v381, didSend: v96, from: v379 } = txn4;
        ;
        const v383 = stdlib.addressEq(v343, v379);
        stdlib.assert(v383, {
          at: './index.rsh:97:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Attacher'
          });
        const v390 = stdlib.add(v381, v327);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 7,
          out_tys: [ctc0, ctc1],
          timeoutAt: ['time', v390],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v326, v328, v343, v347, v365, v380, v390],
            evt_cnt: 0,
            funcNum: 8,
            lct: v381,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v453, time: v452, didSend: v181, from: v451 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v343,
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
            tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v181, from: v451 } = txn6;
          ;
          const v454 = stdlib.addressEq(v343, v451);
          const v455 = stdlib.addressEq(v326, v451);
          const v456 = v454 ? true : v455;
          stdlib.assert(v456, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Attacher'
            });
          ;
          stdlib.protect(ctc2, await interact.onTimeout(), {
            at: './index.rsh:54:25:application',
            fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'onTimeout',
            who: 'Attacher'
            });
          
          return;
          
          }
        else {
          const {data: [v395, v396], secs: v398, time: v397, didSend: v106, from: v394 } = txn5;
          ;
          const v399 = stdlib.addressEq(v326, v394);
          stdlib.assert(v399, {
            at: './index.rsh:107:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
            });
          const v400 = stdlib.digest(ctc4, [v395, v396]);
          const v401 = stdlib.digestEq(v365, v400);
          stdlib.assert(v401, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:111:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Attacher'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 9,
            out_tys: [],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v404, time: v403, didSend: v114, from: v402 } = txn6;
          ;
          const v405 = stdlib.addressEq(v326, v402);
          stdlib.assert(v405, {
            at: './index.rsh:115:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Attacher'
            });
          const v406 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
          const v407 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
          const v408 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
          const v409 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
          let v410;
          const v411 = stdlib.eq(v407, v409);
          if (v411) {
            v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v412 = stdlib.add(v406, v408);
            const v413 = stdlib.eq(v412, v407);
            if (v413) {
              v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v415 = stdlib.eq(v412, v409);
              if (v415) {
                v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            }
          const v416 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          const v417 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v418 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
          const v419 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v420 = v417 ? v418 : v419;
          const v421 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v422 = v416 ? v421 : v420;
          const v423 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '0')];
          const v424 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '1')];
          const v425 = stdlib.mul(v423, v328);
          const v426 = stdlib.mul(v424, v328);
          ;
          ;
          stdlib.protect(ctc2, await interact.onResult(v380, v396, v426), {
            at: './index.rsh:133:22:application',
            fs: ['at ./index.rsh:132:9:application call to [unknown function] (defined at: ./index.rsh:132:13:function exp)'],
            msg: 'onResult',
            who: 'Attacher'
            });
          
          return;
          
          
          }
        
        }
      
      }
    
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
  
  
  const v316 = stdlib.protect(ctc1, interact.choice, 'for Deployer\'s interact field choice');
  const v319 = stdlib.protect(ctc0, interact.deadline, 'for Deployer\'s interact field deadline');
  const v320 = stdlib.protect(ctc0, interact.wager, 'for Deployer\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v319, v320],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:63:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v320, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v327, v328], secs: v330, time: v329, didSend: v62, from: v326 } = txn1;
      
      sim_r.txns.push({
        amt: v328,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v339 = stdlib.add(v329, v327);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v327, v328], secs: v330, time: v329, didSend: v62, from: v326 } = txn1;
  ;
  const v339 = stdlib.add(v329, v327);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v339],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v326, v327, v328, v339],
      evt_cnt: 0,
      funcNum: 2,
      lct: v329,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v507, time: v506, didSend: v280, from: v505 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v326,
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
      tys: [ctc5, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v507, time: v506, didSend: v280, from: v505 } = txn3;
    ;
    ;
    stdlib.protect(ctc4, await interact.onTimeout(), {
      at: './index.rsh:54:25:application',
      fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:72:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'onTimeout',
      who: 'Deployer'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v345, time: v344, didSend: v71, from: v343 } = txn2;
    const v347 = stdlib.add(v328, v328);
    ;
    const v357 = stdlib.add(v344, v327);
    const v361 = stdlib.protect(ctc0, await interact.random(), {
      at: 'reach standard library:64:31:application',
      fs: ['at ./index.rsh:81:46:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:79:9:application call to [unknown function] (defined at: ./index.rsh:79:13:function exp)'],
      msg: 'random',
      who: 'Deployer'
      });
    const v362 = stdlib.digest(ctc2, [v361, v316]);
    
    const txn3 = await (ctc.sendrecv({
      args: [v326, v327, v328, v343, v347, v357, v362],
      evt_cnt: 1,
      funcNum: 3,
      lct: v344,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:85:5:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v365], secs: v367, time: v366, didSend: v87, from: v364 } = txn3;
        
        ;
        const v375 = stdlib.add(v366, v327);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v357],
      tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0, ctc3],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v326, v327, v328, v343, v347, v357],
        evt_cnt: 0,
        funcNum: 4,
        lct: v344,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v489, time: v488, didSend: v249, from: v487 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v343,
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
        tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v489, time: v488, didSend: v249, from: v487 } = txn4;
      ;
      const v490 = stdlib.addressEq(v343, v487);
      const v491 = stdlib.addressEq(v326, v487);
      const v492 = v490 ? true : v491;
      stdlib.assert(v492, {
        at: 'reach standard library:200:11:dot',
        fs: ['at ./index.rsh:86:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'sender correct',
        who: 'Deployer'
        });
      ;
      stdlib.protect(ctc4, await interact.onTimeout(), {
        at: './index.rsh:54:25:application',
        fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:86:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
        msg: 'onTimeout',
        who: 'Deployer'
        });
      
      return;
      
      }
    else {
      const {data: [v365], secs: v367, time: v366, didSend: v87, from: v364 } = txn3;
      ;
      const v368 = stdlib.addressEq(v326, v364);
      stdlib.assert(v368, {
        at: './index.rsh:85:5:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Deployer'
        });
      const v375 = stdlib.add(v366, v327);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: ['time', v375],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v326, v327, v328, v343, v347, v365, v375],
          evt_cnt: 0,
          funcNum: 6,
          lct: v366,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v471, time: v470, didSend: v215, from: v469 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v326,
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
          tys: [ctc5, ctc0, ctc0, ctc5, ctc0, ctc3, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v471, time: v470, didSend: v215, from: v469 } = txn5;
        ;
        const v472 = stdlib.addressEq(v343, v469);
        const v473 = stdlib.addressEq(v326, v469);
        const v474 = v472 ? true : v473;
        stdlib.assert(v474, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:98:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Deployer'
          });
        ;
        stdlib.protect(ctc4, await interact.onTimeout(), {
          at: './index.rsh:54:25:application',
          fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:98:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'onTimeout',
          who: 'Deployer'
          });
        
        return;
        
        }
      else {
        const {data: [v380], secs: v382, time: v381, didSend: v96, from: v379 } = txn4;
        ;
        const v383 = stdlib.addressEq(v343, v379);
        stdlib.assert(v383, {
          at: './index.rsh:97:5:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Deployer'
          });
        const v390 = stdlib.add(v381, v327);
        const txn5 = await (ctc.sendrecv({
          args: [v326, v328, v343, v347, v365, v380, v390, v361, v316],
          evt_cnt: 2,
          funcNum: 7,
          lct: v381,
          onlyIf: true,
          out_tys: [ctc0, ctc1],
          pay: [stdlib.checkedBigNumberify('./index.rsh:107:5:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v395, v396], secs: v398, time: v397, didSend: v106, from: v394 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v390],
          tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc1, ctc0, ctc0, ctc1],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v326, v328, v343, v347, v365, v380, v390],
            evt_cnt: 0,
            funcNum: 8,
            lct: v381,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v453, time: v452, didSend: v181, from: v451 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v343,
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
            tys: [ctc5, ctc0, ctc5, ctc0, ctc3, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v453, time: v452, didSend: v181, from: v451 } = txn6;
          ;
          const v454 = stdlib.addressEq(v343, v451);
          const v455 = stdlib.addressEq(v326, v451);
          const v456 = v454 ? true : v455;
          stdlib.assert(v456, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Deployer'
            });
          ;
          stdlib.protect(ctc4, await interact.onTimeout(), {
            at: './index.rsh:54:25:application',
            fs: ['at ./index.rsh:53:9:application call to [unknown function] (defined at: ./index.rsh:53:21:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:52:28:function exp)', 'at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'onTimeout',
            who: 'Deployer'
            });
          
          return;
          
          }
        else {
          const {data: [v395, v396], secs: v398, time: v397, didSend: v106, from: v394 } = txn5;
          ;
          const v399 = stdlib.addressEq(v326, v394);
          stdlib.assert(v399, {
            at: './index.rsh:107:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v400 = stdlib.digest(ctc2, [v395, v396]);
          const v401 = stdlib.digestEq(v365, v400);
          stdlib.assert(v401, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:111:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Deployer'
            });
          const txn6 = await (ctc.sendrecv({
            args: [v326, v328, v343, v380, v396],
            evt_cnt: 0,
            funcNum: 9,
            lct: v397,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('./index.rsh:115:5:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v404, time: v403, didSend: v114, from: v402 } = txn6;
              
              ;
              const v406 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
              const v407 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
              const v408 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
              const v409 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
              let v410;
              const v411 = stdlib.eq(v407, v409);
              if (v411) {
                v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              else {
                const v412 = stdlib.add(v406, v408);
                const v413 = stdlib.eq(v412, v407);
                if (v413) {
                  v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                  }
                else {
                  const v415 = stdlib.eq(v412, v409);
                  if (v415) {
                    v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                    }
                  else {
                    v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                    }
                  }
                }
              const v416 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
              const v417 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
              const v418 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
              const v419 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
              const v420 = v417 ? v418 : v419;
              const v421 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
              const v422 = v416 ? v421 : v420;
              const v423 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '0')];
              const v424 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '1')];
              const v425 = stdlib.mul(v423, v328);
              const v426 = stdlib.mul(v424, v328);
              sim_r.txns.push({
                kind: 'from',
                to: v326,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'from',
                to: v343,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc5, ctc0, ctc5, ctc1, ctc1],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v404, time: v403, didSend: v114, from: v402 } = txn6;
          ;
          const v405 = stdlib.addressEq(v326, v402);
          stdlib.assert(v405, {
            at: './index.rsh:115:5:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Deployer'
            });
          const v406 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '0')];
          const v407 = v396[stdlib.checkedBigNumberify('./index.rsh:12:23:array', stdlib.UInt_max, '1')];
          const v408 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '0')];
          const v409 = v380[stdlib.checkedBigNumberify('./index.rsh:12:40:array', stdlib.UInt_max, '1')];
          let v410;
          const v411 = stdlib.eq(v407, v409);
          if (v411) {
            v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
            }
          else {
            const v412 = stdlib.add(v406, v408);
            const v413 = stdlib.eq(v412, v407);
            if (v413) {
              v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
              }
            else {
              const v415 = stdlib.eq(v412, v409);
              if (v415) {
                v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                }
              else {
                v410 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                }
              }
            }
          const v416 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
          const v417 = stdlib.eq(v410, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
          const v418 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
          const v419 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v420 = v417 ? v418 : v419;
          const v421 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v422 = v416 ? v421 : v420;
          const v423 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '0')];
          const v424 = v422[stdlib.checkedBigNumberify('./index.rsh:118:9:array', stdlib.UInt_max, '1')];
          const v425 = stdlib.mul(v423, v328);
          const v426 = stdlib.mul(v424, v328);
          ;
          ;
          stdlib.protect(ctc4, await interact.onResult(v396, v380, v425), {
            at: './index.rsh:129:22:application',
            fs: ['at ./index.rsh:128:9:application call to [unknown function] (defined at: ./index.rsh:128:13:function exp)'],
            msg: 'onResult',
            who: 'Deployer'
            });
          
          return;
          
          
          }
        
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAPAAEIBSADBwlQKAKAAXhYMCYDAQABAQAiNQAxGEEFTSpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEACzkkhBgxAAd9JJAxAAU9JIQcMQAD0IQcSRCEHNAESRDQESSISTDQCEhFEKGRJNQNJSlcAIDX/IQRbNf5XSBA1/VdYEDX8gASiBWaOsDT/MQASRDT8JFs1+zT9JFs1+jT7NPoSQQAGIzX5QgAqNPwiWzT9IlsISTX4NPsSQQAGIjX5QgASNPg0+hJBAAchCjX5QgADIzX5gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPkhChJNgBAAAAAAAAAAAgAAAAAAAAAANPkiEk01+LEisgE0+CJbNP4LsggjshA0/7IHs7EisgE0+CRbNP4LsggjshA0A1coILIHs0IDyUghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVyggNf+ABBf82y6wMgY0AyELWw9ENP8xABI0A1cAIDEAEhFEsSKyATQDgUhbsggjshA0/7IHs0IDdUghBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpXACA1/yEEWzX+VyggNf1XcBA1/Ek1BUkiWzX7VwgQNfqABPdRvoQ0+xZQNPpQsDIGNAMhC1sMRDT/MQASRDQDV1AgNPsWNPpQARJENP80/hZQNP1QNPxQNPpQKEsBVwBoZ0ghBzUBMgY1AkIDBkmBBgxAAFNIJTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABGG0rAywMgY0AyEMWw9ENANXMCAxABI0/zEAEhFEsSKyATQDIQhbsggjshA0/7IHs0ICkUglNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSklXACA1/yEJWzX+VzAgNf0hCFs1/FdYIDX7STUFNfqABKCjuoM0+lCwMgY0AyEMWwxENP0xABJEMgY0AyEEWwg1+TT/NP4WUDT9UDT8FlA0+1A0+lA0+RZQKEsBVwB/ZylLAVd/CWdIIQY1ATIGNQJCAh5JIQoMQAEmSSEFDEAA4UmBBAxAAFFIIQU0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gASRJzTzsDIGNAMhDVsPRDT/MQASNANXACAxABIRRLEisgE0AyEIW7III7IQNP+yB7NCAZ1IIQU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hCVs1/VcwIDX8IQhbNftJNQU1+oAEE+7qUTT6ULAyBjQDIQ1bDEQ0/zEAEkQyBjT+CDX5NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQKEsBVwB/ZylLAVd/AWdIJTUBMgY1AkIBL0gjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQ5bD0SxIrIBNAMhCVuyCCOyEDQDVwAgsgezQgDWSSMMQABxSCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/iEJWzX9gASai5F0sDIGNAMhDlsMRDT9SQg1/DT9iAD7MgY0/gg1+zT/NP4WUDT9FlAxAFA0/BZQNPsWUChLAVcAYGdIIQU1ATIGNQJCAHpIgaCNBogAxCI0ARJENARJIhJMNAISEURJNQVJIls1/yRbNf6ABKzRH8M0/xZQNP4WULA0/ogAlDIGNP8INf0xADT/FlA0/hZQNP0WUChLAVcAOGdIIzUBMgY1AkIAGzEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCEFMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
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
                "name": "v327",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v328",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                "name": "v365",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
        "internalType": "struct T5",
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
                "internalType": "struct T9",
                "name": "v380",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v395",
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
                "internalType": "struct T9",
                "name": "v396",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                "name": "v365",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
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
        "internalType": "struct T5",
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
                "internalType": "struct T9",
                "name": "v380",
                "type": "tuple"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v395",
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
                "internalType": "struct T9",
                "name": "v396",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
  Bytecode: `0x6080604052604051620020493803806200204983398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020808301510151620000a1903414600762000144565b602082015151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611d2a806200031f6000396000f3fe6080604052600436106100a55760003560e01c8063a7661d5411610061578063a7661d5414610133578063ab53f2c614610146578063c798003714610169578063de7369981461017c578063e533a29d1461018f578063f4cedab0146101a257005b80631e93b0f1146100ae5780632c10a159146100d25780633388fd1d146100e55780633c49c96d146100f85780637eea518c1461010b578063832307571461011e57005b366100ac57005b005b3480156100ba57600080fd5b506003545b6040519081526020015b60405180910390f35b6100ac6100e0366004611673565b6101b5565b6100ac6100f3366004611696565b610420565b6100ac6101063660046116a8565b610632565b6100ac610119366004611673565b610820565b34801561012a57600080fd5b506001546100bf565b6100ac610141366004611673565b61099e565b34801561015257600080fd5b5061015b610b39565b6040516100c99291906116ba565b6100ac610177366004611673565b610bd6565b6100ac61018a366004611673565b610d6d565b6100ac61019d366004611673565b611038565b6100ac6101b0366004611673565b6111d3565b6101c56001600054146009611423565b6101df813515806101d857506001548235145b600a611423565b6000808055600280546101f190611717565b80601f016020809104026020016040519081016040528092919081815260200182805461021d90611717565b801561026a5780601f1061023f5761010080835404028352916020019161026a565b820191906000526020600020905b81548152906001019060200180831161024d57829003601f168201915b50505050508060200190518101906102829190611768565b90506102a1604051806040016040528060008152602001600081525090565b6102b282606001514310600b611423565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133846040516102e39291906117e1565b60405180910390a160408201516102fa9080611834565b8152604082015161030e9034146008611423565b602082015161031d9043611834565b8160200181815250506103716040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b82516001600160a01b0390811680835260208086015181850190815260408088015181870190815233606080890191825289516080808b019182528b88015160a0808d019182526003600055436001558751998a019a909a529651958801959095529251908601525190951690830152925191810191909152905160c082015260e0015b60405160208183030381529060405260029080519060200190610419929190611448565b5050505050565b6104306007600054146027611423565b61044a8135158061044357506001548235145b6028611423565b60008080556002805461045c90611717565b80601f016020809104026020016040519081016040528092919081815260200182805461048890611717565b80156104d55780601f106104aa576101008083540402835291602001916104d5565b820191906000526020600020905b8154815290600101906020018083116104b857829003601f168201915b50505050508060200190518101906104ed91906118a9565b90506105008160c0015143106029611423565b7fe4ad09dc2241cfc18929bfffab0a33dc80a8b172838931ba645a6ef23d6e760c338360405161053192919061194e565b60405180910390a161054534156024611423565b805161055d906001600160a01b031633146025611423565b6040805161059f9161057991602080870135928701910161198c565b6040516020818303038152906040528051906020012060001c8260800151146026611423565b6105a76114cc565b81516001600160a01b039081168252602080840151908301526040808401519091168183015260a083015160608301526105e9903685900385019085016119aa565b6080820152600960005543600155604051610608908290602001611a07565b6040516020818303038152906040526002908051906020019061062c929190611448565b50505050565b610642600560005414601c611423565b61065c8135158061065557506001548235145b601d611423565b60008080556002805461066e90611717565b80601f016020809104026020016040519081016040528092919081815260200182805461069a90611717565b80156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505050508060200190518101906106ff9190611a6a565b90506107176040518060200160405280600081525090565b6107288260c001514310601e611423565b7f83776c7d3044a9885c3038fbaa2fe711d49100190df29d4d75c425fa741d1cec3384604051610759929190611b08565b60405180910390a161076d3415601a611423565b6060820151610788906001600160a01b03163314601b611423565b60208201516107979043611834565b81526107a1611525565b82516001600160a01b039081168252604080850151602080850191909152606080870151909316918401919091526080808601519284019290925260a0850151918301919091526107fa903686900386019086016119aa565b60a0820152815160c08201526007600055436001556040516103f5908290602001611b3c565b610830600160005414600d611423565b61084a8135158061084357506001548235145b600e611423565b60008080556002805461085c90611717565b80601f016020809104026020016040519081016040528092919081815260200182805461088890611717565b80156108d55780601f106108aa576101008083540402835291602001916108d5565b820191906000526020600020905b8154815290600101906020018083116108b857829003601f168201915b50505050508060200190518101906108ed9190611768565b90506109018160600151431015600f611423565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516109329291906117e1565b60405180910390a16109463415600c611423565b805160408083015190516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610983573d6000803e3d6000fd5b506000808055600181905561099a9060029061158f565b5050565b6109ae6003600054146017611423565b6109c8813515806109c157506001548235145b6018611423565b6000808055600280546109da90611717565b80601f0160208091040260200160405190810160405280929190818152602001828054610a0690611717565b8015610a535780601f10610a2857610100808354040283529160200191610a53565b820191906000526020600020905b815481529060010190602001808311610a3657829003601f168201915b5050505050806020019051810190610a6b9190611baa565b9050610a7f8160a001514310156019611423565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223383604051610ab09291906117e1565b60405180910390a1610ac434156015611423565b6060810151610af8906001600160a01b03163314610aee5781516001600160a01b03163314610af1565b60015b6016611423565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610983573d6000803e3d6000fd5b600060606000546002808054610b4e90611717565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7a90611717565b8015610bc75780601f10610b9c57610100808354040283529160200191610bc7565b820191906000526020600020905b815481529060010190602001808311610baa57829003601f168201915b50505050509050915091509091565b610be66005600054146021611423565b610c0081351580610bf957506001548235145b6022611423565b600080805560028054610c1290611717565b80601f0160208091040260200160405190810160405280929190818152602001828054610c3e90611717565b8015610c8b5780601f10610c6057610100808354040283529160200191610c8b565b820191906000526020600020905b815481529060010190602001808311610c6e57829003601f168201915b5050505050806020019051810190610ca39190611a6a565b9050610cb78160c001514310156023611423565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae3383604051610ce89291906117e1565b60405180910390a1610cfc3415601f611423565b6060810151610d30906001600160a01b03163314610d265781516001600160a01b03163314610d29565b60015b6020611423565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610983573d6000803e3d6000fd5b610d7d6009600054146031611423565b610d9781351580610d9057506001548235145b6032611423565b600080805560028054610da990611717565b80601f0160208091040260200160405190810160405280929190818152602001828054610dd590611717565b8015610e225780601f10610df757610100808354040283529160200191610e22565b820191906000526020600020905b815481529060010190602001808311610e0557829003601f168201915b5050505050806020019051810190610e3a9190611c3e565b9050610e446115cc565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3384604051610e759291906117e1565b60405180910390a1610e893415602f611423565b8151610ea1906001600160a01b031633146030611423565b8160600151602001518260800151602001511415610ec25760018152610f18565b606082015151608083015151610ed89190611834565b6020808301829052608084015101511415610ef65760008152610f18565b81606001516020015181602001511415610f135760028152610f18565b600181525b604081018051600090819052905160026020918201819052606084018051600190819052905183015260808401805191909152510152805115610f72578051600214610f68578060600151610f78565b8060400151610f78565b80608001515b60a082018190528251602084015191516001600160a01b03909116916108fc91610fa29190611cd5565b6040518115909202916000818181858888f19350505050158015610fca573d6000803e3d6000fd5b5081604001516001600160a01b03166108fc83602001518360a0015160200151610ff49190611cd5565b6040518115909202916000818181858888f1935050505015801561101c573d6000803e3d6000fd5b50600080805560018190556110339060029061158f565b505050565b611048600760005414602c611423565b6110628135158061105b57506001548235145b602d611423565b60008080556002805461107490611717565b80601f01602080910402602001604051908101604052809291908181526020018280546110a090611717565b80156110ed5780601f106110c2576101008083540402835291602001916110ed565b820191906000526020600020905b8154815290600101906020018083116110d057829003601f168201915b505050505080602001905181019061110591906118a9565b90506111198160c00151431015602e611423565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776338360405161114a9291906117e1565b60405180910390a161115e3415602a611423565b6040810151611192906001600160a01b031633146111885781516001600160a01b0316331461118b565b60015b602b611423565b80604001516001600160a01b03166108fc82606001519081150290604051600060405180830381858888f19350505050158015610983573d6000803e3d6000fd5b6111e36003600054146012611423565b6111fd813515806111f657506001548235145b6013611423565b60008080556002805461120f90611717565b80601f016020809104026020016040519081016040528092919081815260200182805461123b90611717565b80156112885780601f1061125d57610100808354040283529160200191611288565b820191906000526020600020905b81548152906001019060200180831161126b57829003601f168201915b50505050508060200190518101906112a09190611baa565b90506112b86040518060200160405280600081525090565b6112c98260a0015143106014611423565b6040805133815284356020808301919091528501358183015290517f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc19181900360600190a161131a34156010611423565b8151611332906001600160a01b031633146011611423565b60208201516113419043611834565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260056000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016103f5565b8161099a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461145490611717565b90600052602060002090601f01602090048101928261147657600085556114bc565b82601f1061148f57805160ff19168380011785556114bc565b828001600101855582156114bc579182015b828111156114bc5782518255916020019190600101906114a1565b506114c8929150611646565b5090565b6040805160a0810182526000808252602080830182905282840182905283518085019094528184528301529060608201905b8152602001611520604051806040016040528060008152602001600081525090565b905290565b6040518060e0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001611582604051806040016040528060008152602001600081525090565b8152602001600081525090565b50805461159b90611717565b6000825580601f106115ab575050565b601f0160209004906000526020600020908101906115c99190611646565b50565b6040518060c001604052806000815260200160008152602001611602604051806040016040528060008152602001600081525090565b8152602001611624604051806040016040528060008152602001600081525090565b81526020016114fe604051806040016040528060008152602001600081525090565b5b808211156114c85760008155600101611647565b60006040828403121561166d57600080fd5b50919050565b60006040828403121561168557600080fd5b61168f838361165b565b9392505050565b60006080828403121561166d57600080fd5b60006060828403121561166d57600080fd5b82815260006020604081840152835180604085015260005b818110156116ee578581018301518582016060015282016116d2565b81811115611700576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061172b57607f821691505b6020821081141561166d57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461176357600080fd5b919050565b60006080828403121561177a57600080fd5b6040516080810181811067ffffffffffffffff821117156117ab57634e487b7160e01b600052604160045260246000fd5b6040526117b78361174c565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461180f57600080fd5b80604085015250509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156118475761184761181e565b500190565b60006040828403121561185e57600080fd5b6040516040810181811067ffffffffffffffff8211171561188f57634e487b7160e01b600052604160045260246000fd5b604052825181526020928301519281019290925250919050565b600061010082840312156118bc57600080fd5b60405160e0810181811067ffffffffffffffff821117156118ed57634e487b7160e01b600052604160045260246000fd5b6040526118f98361174c565b8152602083015160208201526119116040840161174c565b604082015260608301516060820152608083015160808201526119378460a0850161184c565b60a082015260e0929092015160c083015250919050565b600060a08201905060018060a01b0384168252823560208301526020830135604083015261168f606083016040850180358252602090810135910152565b8281526060810161168f602083018480358252602090810135910152565b6000604082840312156119bc57600080fd5b6040516040810181811067ffffffffffffffff821117156119ed57634e487b7160e01b600052604160045260246000fd5b604052823581526020928301359281019290925250919050565b81516001600160a01b039081168252602080840151908301526040808401519091169082015260608083015160e0830191611a4e9084018280518252602090810151910152565b5060809290920151805160a08301526020015160c09091015290565b600060e08284031215611a7c57600080fd5b60405160e0810181811067ffffffffffffffff82111715611aad57634e487b7160e01b600052604160045260246000fd5b604052611ab98361174c565b81526020830151602082015260408301516040820152611adb6060840161174c565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b6001600160a01b0383168152813560208083019190915282013560408083019190915282013560608201526080810161168f565b60006101008201905060018060a01b038084511683526020840151602084015280604085015116604084015250606083015160608301526080830151608083015260a0830151611b9960a084018280518252602090810151910152565b5060c083015160e083015292915050565b600060c08284031215611bbc57600080fd5b60405160c0810181811067ffffffffffffffff82111715611bed57634e487b7160e01b600052604160045260246000fd5b604052611bf98361174c565b81526020830151602082015260408301516040820152611c1b6060840161174c565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215611c5057600080fd5b60405160a0810181811067ffffffffffffffff82111715611c8157634e487b7160e01b600052604160045260246000fd5b604052611c8d8361174c565b815260208301516020820152611ca56040840161174c565b6040820152611cb7846060850161184c565b6060820152611cc98460a0850161184c565b60808201529392505050565b6000816000190483118215151615611cef57611cef61181e565b50029056fea2646970667358221220459a03f27912ca6704fdb3d4895907337877887bddc9211bf033ebcc539a2cae64736f6c634300080c0033`,
  BytecodeLen: 8265,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:72:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:77:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:86:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:89:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:98:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:101:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:108:12:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:113:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:126:11:after expr stmt semicolon',
    fs: [],
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
