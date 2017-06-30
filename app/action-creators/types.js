import {SHOW_TYPES, CHANGE_CATEGORY} from '../constants';

export const showTypes = () => ({
  type: SHOW_TYPES,
});

export const changeCategory = category => ({
  type: CHANGE_CATEGORY,
  activeCategory: category
})
