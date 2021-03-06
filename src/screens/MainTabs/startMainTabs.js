import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-map', 30),
    Icon.getImageSource('ios-share', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'rate-n-share-foods.FoodPlacesScreen',
          label: 'Food Places',
          title: 'Food Places',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        },
        {
          screen: 'rate-n-share-foods.ShareFoodScreen',
          label: 'Share Food',
          title: 'Share Food',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu',
                id: 'sideDrawerToggle'
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'orange'
      },
      drawer: {
        left: {
          screen: 'rate-n-share-foods.SideDrawer'
        }
      }
    });
  });
};


export default startTabs;