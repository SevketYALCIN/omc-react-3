import { action } from 'typesafe-actions';
import { LOGIN, LOGOUT } from '../constants/userConstants'

export const login = (username:string) => action(LOGIN, username)
export const logout = () => action(LOGOUT)