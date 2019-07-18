import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FoodPlaceList from '../../components/FoodPlaceList/FoodPlaceList';

class FoodPlacesScreen extends React.Component {
  render () {
    return (
      <View>
        <FoodPlaceList foodPlaces={this.props.foodPlaces} />
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