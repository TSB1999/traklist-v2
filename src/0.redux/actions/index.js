import store from '../store';
import {LOADING, SIGNED_IN, USER_DETAILS} from '../actions/actionTypes';

export const setLoading = store.dispatch({
  type: LOADING,
  payload: {
    description: 'Loading state.',
  },
});

export const setLoggedIn = store.dispatch({
  type: SIGNED_IN,
  payload: {
    description: 'Log in state.',
  },
});

export const setUserDetails = store.dispatch({
  type: USER_DETAILS,
  payload: {
    description: 'User state.',
  },
});
