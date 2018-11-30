const isPromise = payload => {
  return typeof payload === 'object' &&
        typeof payload.then === 'function';
};

export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const PROMISE_ERROR = 'PROMISE_ERROR';

export default store => next => action => {
  const { type, payload } = action;

  if(!isPromise(action.payload)) return next(action);

  store.dispatch({ type: LOAD_START });

  return payload
    .then(result => {
      console.log('result', result);
      next({ type, payload: result });
      store.dispatch({ type: LOAD_END });
    })
    .catch(err => {
      store.dispatch({ type: LOAD_END });
      store.dispatch({ type: PROMISE_ERROR, payload: err });
    });
};

