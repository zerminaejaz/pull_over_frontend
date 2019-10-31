import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  user: {},

};
export default createStore(reducers, applyMiddleware(thunk));