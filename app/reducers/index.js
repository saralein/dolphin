import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  types: require('./types').default,
})

export default rootReducer;
