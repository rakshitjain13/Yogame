import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Auth } from './authReducer';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
