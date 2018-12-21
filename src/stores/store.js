// const mobx = require('../utils/mobx');
// const extendObservable = require('../utils/mobx').extendObservable;
// const computed = require('../utils/mobx').computed;
// const toJS = require('../utils/mobx').toJS;

// let store = function () {
//   extendObservable(this, {

//     // observable data
//     players: [],

//     // computed data
//     get count() {
//       return this.players.length;
//     }
//   });

//   // action
//   this.addPlayer = name => {
//     let len = this.count;    //此处调用computed data
//     let id = len === 0 ? 1 : this.players[len - 1].id + 1;
//     this.players.push(new player(name, id));
//   }
// }

// export default store;