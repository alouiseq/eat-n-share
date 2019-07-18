import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('md-map', 30),
    Icon.getImageSource('ios-share-alt', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'rate-n-share-foods.FoodPlacesScreen',
          label: 'Food Places',
          title: 'Food Places',
          icon: sources[0]
        },
        {
          screen: 'rate-n-share-foods.ShareFoodScreen',
          label: 'Share Food',
          title: 'Share Food',
          icon: sources[1]
        }
      ]
    });
  });
};


export default startTabs;