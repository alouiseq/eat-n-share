import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
import FoodPlacesScreen from './src/screens/FoodPlaces/FoodPlaces';
import ShareFoodScreen from './src/screens/ShareFood/ShareFood';

// Register Screens
Navigation.registerComponent('rate-n-share-foods.AuthScreen', () => AuthScreen);
Navigation.registerComponent('rate-n-share-foods.FoodPlacesScreen', () => FoodPlacesScreen);
Navigation.registerComponent('rate-n-share-foods.ShareFoodScreen', () => ShareFoodScreen);

// Start App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'rate-n-share-foods.AuthScreen',
    title: 'Login'
  }
});
