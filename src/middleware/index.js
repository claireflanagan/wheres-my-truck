import { thunk } from './thunk';
import promiseMiddleware from './promise';

export const middleware = [
  thunk,
  promiseMiddleware
];
