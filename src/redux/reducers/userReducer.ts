import * as userActions from "../actions/userActions";
import { ActionType } from 'typesafe-actions';
import { combineReducers } from 'redux';
import { LOGIN, LOGOUT, ADD_TO_LIBRARY } from '../constants/userConstants'

export type UsersAction = ActionType<typeof userActions>;

export type UserState = {
  readonly user: string;
  readonly gifs: string[];
};

export default combineReducers<UserState, UsersAction>({
  user: (state = '', action) => {
    switch (action.type) {
      case LOGIN:
        return action.payload

      case LOGOUT:
        return state

      default:
        return state;
    }
  },
  gifs: (state = [], action) => {
    switch (action.type) {
      case ADD_TO_LIBRARY:
        if(!state.includes(action.payload)) {
          console.log(`Added ${action.payload} to my library.`)
          return [...state, action.payload]
        }
        else {
          return state
        }

      default:
        return state;
    }
  }
});
