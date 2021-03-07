import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Auth } from './authReducer';

import thunk from 'redux-thunk';

import logger from 'redux-logger';
import { Pose } from './poseReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      auth: Auth,
      pose:Pose
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
