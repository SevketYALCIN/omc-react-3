import { createStore } from 'redux';
import rootReducer from "./reducers/userReducer";

const initialState = {};

const store = createStore(rootReducer, initialState);
export default store;