import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE
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

export const deleteItem = (key) => {
  return {
    type: DELETE_FOOD_PLACE,
    foodPlaceKey: key
  };
};
