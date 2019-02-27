import { action } from 'typesafe-actions';
import { LOGIN, LOGOUT, ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from '../constants/userConstants'

export const login = (username:string) => action(LOGIN, username)
export const logout = () => action(LOGOUT)
export const addToLibrary = (url: string) => action(ADD_TO_LIBRARY, url)
export const removeFromLibrary = (url: string) => action(REMOVE_FROM_LIBRARY, url)