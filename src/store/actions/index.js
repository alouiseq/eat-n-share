import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE,
  TRY_AUTH
} from '../actions/actionTypes';

export const addItem = (value, image) => {
  return {
    type: ADD_FOOD_PLACE,
    foodPlace: {
      key: Math.random().toString(),
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

export const tryAuth = (authData) => ({
  type: TRY_AUTH,
  authData: authData
});
