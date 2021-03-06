import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import foodPlaceReducer from './reducers/foodPlacesReducer';
import loadingReducer from './reducers/loadingReducer';

const rootReducer = combineReducers({
  foodPlaces: foodPlaceReducer,
  loadingState: loadingReducer
});

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;