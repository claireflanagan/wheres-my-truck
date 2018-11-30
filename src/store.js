import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';
import { middleware } from './middleware/index';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //what is this??

export default createStore(
  reducers, 
  composeEnhancer(
    applyMiddleware(
      ...middleware
    )
  )
);

