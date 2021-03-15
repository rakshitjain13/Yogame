import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import axios from 'axios';

export const receiveLogin = (response, creds) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    token: response.token,
    creds,
  };
};

export const loginError = (message) => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    message,
  };
};

export const loginUser = (profileObj) => (dispatch, Ownprops) => {
  // We dispatch requestLogin to kickoff the call to the API

  return axios
    .post(baseUrl + 'google/signin', { profileObj })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .then((response) => {
      if (response.success) {
        var creds = {
          user_id: response.user._id,
          username: response.user.username,
          imageUrl: response.user.imageUrl,
        };
        var level = response.user.level;
        localStorage.setItem('token', response.token);
        localStorage.setItem('creds', JSON.stringify(creds));
        localStorage.setItem('level', level);
        // Dispatch the success action
        dispatch(receiveLogin(response, creds));
      } else {
        var error = new Error('Error ' + response.status);
        error.response = response;
        throw error;
      }
    })
    .catch((error) => dispatch(loginError(error.message)));
};
export const requestLogout = () => {
  return {
    type: ActionTypes.LOGOUT_REQUEST,
  };
};

export const receiveLogout = () => {
  return {
    type: ActionTypes.LOGOUT_SUCCESS,
  };
};

export const logoutUser = () => (dispatch) => {
  dispatch(requestLogout());
  localStorage.removeItem('token');
  localStorage.removeItem('creds');
  dispatch(receiveLogout());
};

export const DoingRight = () => {
  return {
    type: ActionTypes.DOING_RIGHT,
  };
};
export const DoingWrong = () => {
  return {
    type: ActionTypes.DOING_WRONG,
  };
};
export const LevelUpdated = () => {
  const state=JSON.parse(localStorage.getItem('creds'))
  return {
    type: ActionTypes.LEVEL_UPDATED,
    state,
  };
};
