import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE,
  SELECT_FOOD_PLACE,
  DESELECT_FOOD_PLACE
} from '../actions/actionTypes';

export const addItem = (value, image) => {
  return {
    type: ADD_FOOD_PLACE,
    foodPlace: {
      key: Math.random(),
      value,
      image
    }
  };
};

export const deleteItem = () => {
  return {
    type: DELETE_FOOD_PLACE
  };
};

export const selectItem = (selectedKey) => {
  return {
    type: SELECT_FOOD_PLACE,
    selectedKey
  };
};

export const deselectItem = () => {
  return {
    type: DESELECT_FOOD_PLACE
  };
}
