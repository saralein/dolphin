import {SHOW_TYPES, CHANGE_CATEGORY} from '../constants';

const initialState = {
  showTypes: false,
  categories: [
    'address', 'commerce', 'company',
    'database', 'date', 'finance',
    'internet', 'lorem', 'name',
    'phone', 'random'
  ],
  activeCategory: 'name'
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type){
    case SHOW_TYPES:
      newState.showTypes = !newState.showTypes;
      break;
    case CHANGE_CATEGORY:
      newState.activeCategory = action.activeCategory;
      break;
    default:
      return state
  }
  return newState;
}

export default reducer;
