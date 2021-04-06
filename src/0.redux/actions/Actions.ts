import * as actionTypes from './ActionTypes';

export const AUTH_STATE = (description: string) => {
  return {
    type: actionTypes.AUTH_STATE,
    payload: {
      description,
    },
  };
};
