export default function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({...initialState}, {type: '__INIT__'});
  let listeners = [];

  return {
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter(l => l !== fn);
        }
      };
    },

    dispatch(action) {
      state = rootReducer(state, action);
      listeners.forEach(listener => listener(state));
    },

    getState() {
      return JSON.parse(JSON.stringify(state));
    }
  };
}

// export default class Store {
//   #subscribers = [];
//   constructor(rootReducer, initialState) {
//     this.state = rootReducer({ ...initialState }, { type: '__INIT__' });
//     this.rootReducer = rootReducer;
//   }
//
//   subscribe(cb) {
//     this.#subscribers.push(cb);
//     return () => this.#subscribers.filter((l) => l !== cb);
//   }
//
//   dispatch(action) {
//     this.state = this.rootReducer(this.state, action);
//     this.#subscribers.forEach((listener) => {
//       listener(this.state);
//     });
//   }
//
//   getState() {
//     return JSON.parse(JSON.stringify(this.state));
//   }
// }
