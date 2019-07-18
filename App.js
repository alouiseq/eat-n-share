import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import FoodPlacesScreen from './src/screens/FoodPlaces/FoodPlaces';
import ShareFoodScreen from './src/screens/ShareFood/ShareFood';
import configureStore from './src/store/configureStore';
import FoodPlaceDetail from './src/screens/FoodPlaceDetail/FoodPlaceDetail';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  'rate-n-share-foods.AuthScreen',
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'rate-n-share-foods.FoodPlacesScreen',
  () => FoodPlacesScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'rate-n-share-foods.ShareFoodScreen',
  () => ShareFoodScreen,
  store,
  Provider
);
Navigation.registerComponent(
  'rate-n-share-foods.FoodPlaceDetail',
  () => FoodPlaceDetail,
  store,
  Provider
);
Navigation.registerComponent(
  'rate-n-share-foods.SideDrawer',
  () => SideDrawer
);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'rate-n-share-foods.AuthScreen',
    title: 'Login'
  }
});
