import { createStore, combineReducers } from 'redux';
import foodPlaceReducer from './reducers/foodPlacesReducer';

const rootReducer = combineReducers({
  foodPlaces: foodPlaceReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;