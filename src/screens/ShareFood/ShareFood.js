import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import FoodPlaceInput from '../../components/FoodPlaceInput/FoodPlaceInput';
import { addItem } from '../../store/actions/index';
import sampleImage from '../../../src/assets/lechon.jpg';

class ShareFoodScreen extends React.Component {
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

  onAddFoodPlaceHandler = (foodPlace) => {
    this.props.onAddFoodPlace(foodPlace);
  }

  render () {
    return (
      <View>
        <FoodPlaceInput onAddFoodPlace={this.onAddFoodPlaceHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddFoodPlace: (foodPlace) => dispatch(addItem(foodPlace, sampleImage))
  }
}

export default connect(null, mapDispatchToProps)(ShareFoodScreen);