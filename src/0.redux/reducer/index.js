import * as actions from '../actions/actionTypes';

export default function reducer(
  state = {
    loading: false,
    loggedIn: false,
    user_details: {
      name: '',
    },
  },
  action,
) {
  switch (action.type) {
    case actions.USER_DETAILS:
      return {
        user_details: !state['user'],
      };
    case actions.LOADING:
      return {
        loading: !state['loading'],
      };
    case actions.SIGNED_IN:
      return {
        loggedIn: !state['loggedIn'],
      };
  }
}
