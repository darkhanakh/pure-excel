/* export default function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({ ...initialState }, { type: '__INIT__' });
  let listeners = [];

  return {
    subscribe(cb) {
      listeners.push(cb);
      return {
        unsubscribe() {
          listeners = listeners.filter((l) => l !== cb);
        },
      };
    },

    dispatch(action) {
      state = rootReducer(state, action);
      listeners.forEach(function (listener) {
        listener(state);
      });
    },

    getState() {
      return state;
    },
  };
} */

export default class Store {
  constructor(rootReducer, initialState = {}) {
    this.state = rootReducer({ ...initialState }, { type: '__INIT__' });
    this.subscribers = [];
    this.rootReducer = rootReducer;
  }

  subscribe(cb) {
    this.subscribers.push(cb);
    return () => this.subscribers.filter((l) => l !== cb);
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
    this.subscribers.forEach((listener) => {
      listener(this.state);
    });
  }

  getState() {
    return this.state;
  }
}
