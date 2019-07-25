import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FoodPlaceList from '../../components/FoodPlaceList/FoodPlaceList';

class FoodPlacesScreen extends React.Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        });
      }
    }
  }

  itemSelectedHandler = key => {
    const selectedItem = this.props.foodPlaces.find(fp => {
      return fp.key === key;
    }) || {};
    this.props.navigator.push({
      screen: 'rate-n-share-foods.FoodPlaceDetail',
      title: selectedItem.value,
      passProps: {
        selectedItem: selectedItem
      }
    });
  }

  render () {
    return (
      <View>
        <FoodPlaceList
          foodPlaces={this.props.foodPlaces}
          onItemSelect={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    foodPlaces: state.foodPlaces.foodPlaces
  }
}

export default connect(mapStateToProps)(FoodPlacesScreen);