import {
  SET_FOOD_PLACES
} from '../actions/actionTypes';

const initialState = {
  foodPlaces: []
};

export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_FOOD_PLACES:
      return {
        ...state,
        foodPlaces: action.foodPlaces
      };
    default:
      return state;
  }
};
