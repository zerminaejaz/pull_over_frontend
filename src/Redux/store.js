import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from "./reducer"

const initialState = {
  user: {},

};
export default createStore(reducer, applyMiddleware(thunk));