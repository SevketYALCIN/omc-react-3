import * as userActions from "../actions/userActions";
import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { LOGIN, LOGOUT } from '../constants/userConstants'

export type UsersAction = ActionType<typeof userActions>;

export type UserState = {
  readonly user: string;
};

export default combineReducers<UserState, UsersAction>({
  user: (state = '', action) => {
    switch (action.type) {
      case LOGIN:
        return action.payload;

      case LOGOUT:
        return state

      default:
        return state;
    }
  }
});
