import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE,
  SELECT_FOOD_PLACE,
  DESELECT_FOOD_PLACE
} from '../actions/actionTypes';

const initialState = {
  foodPlaces: [
    // {
    //   key: Math.random(),
    //   value: 'Filipino',
    //   image: sampleImage
    // },
  ],
  selectedItem: null
}

export default reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FOOD_PLACE:
      return {
        ...state,
        foodPlaces: [
          ...state.foodPlaces,
          action.foodPlace
        ]
      };
    case DELETE_FOOD_PLACE:
      const foodPlaces = state.foodPlaces.filter(fp => (
        fp.key !== state.selectedItem.key
      ));
      return {
        ...state,
        foodPlaces,
        selectedItem: null
      };
    case SELECT_FOOD_PLACE:
      const selectedItem = state.foodPlaces.find((fp) => (
        fp.key === action.selectedKey
      )) || null;
      return {
        ...state,
        selectedItem
      };
    case DESELECT_FOOD_PLACE:
      return {
        ...state,
        selectedItem: null
      };
    default:
      return state;
  }
}
