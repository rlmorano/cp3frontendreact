import { SET_CURRENT_USER, USER_LOADING, GET_ERRORS } from '../types';
const isEmpty = require('is-empty');

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        errors: {}
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
