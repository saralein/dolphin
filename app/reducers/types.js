import {SHOW_TYPES} from '../constants';

const initialState = {
  showTypes: false,
  categories: [
    'address', 'commerce', 'company',
    'database', 'date', 'finance',
    'internet', 'lorem', 'name',
    'phone', 'random'
  ],
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case SHOW_TYPES:
      newState.showTypes = !newState.showTypes;
      break;
    default:
      return state
  }
  return newState;
}

export default reducer;
