export default function createStore(rootReducer, initialState = {}) {
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
}
