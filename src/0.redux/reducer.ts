import * as actions from './actions/ActionTypes';

export const reducer = (
  state = {
    loggedIn: false,
  },
  action,
) => {
  switch (action.type) {
    case actions.AUTH_STATE:
      return {
        loggedIn: !state.loggedIn,
      };
  }
};

export default reducer;
