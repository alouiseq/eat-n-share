import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import FoodPlaceInput from '../../components/FoodPlaceInput/FoodPlaceInput';
import { addItem } from '../../store/actions/index';
import sampleImage from '../../../src/assets/lechon.jpg';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';
import MyText from '../../components/UI/MyText/MyText';
import MyHeadingText from '../../components/UI/MyHeadingText/MyHeadingText';
import MyButton from '../../components/UI/MyButton/MyButton';
import validate from '../../util/validations/loginValidations';

class ShareFoodScreen extends React.Component {
  static navigatorStyle = {
    navBarButtonColor: 'orange'
  }

  state = {
    controls: {
      foodPlaceName: {
        value: '',
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      location: {
        value: null,
        valid: false
      } 
    }
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

  onChangeNameHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          foodPlaceName: {
            ...prevState.controls.foodPlaceName,
            value: val,
            valid: validate(val, prevState.controls.foodPlaceName.validationRules),
            touched: true
          }
        }
      };
    });
  }

  onAddFoodPlaceHandler = () => {
    this.props.onAddFoodPlace(
      this.state.controls.foodPlaceName.value,
      this.state.controls.location.value,
      sampleImage
    );
  }

  locationPickedHandler = location => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          location: {
            value: location,
            valid: true
          }
        }
      }
    })
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MyText>
            <MyHeadingText>Share a food place with us!</MyHeadingText>
          </MyText>
          <PickImage />
          <PickLocation onLocationPick={this.locationPickedHandler} />
          <FoodPlaceInput
            placeName={this.state.controls.foodPlaceName.value}
            onChangeText={this.onChangeNameHandler}
          />
          <View style={styles.button}>
            <MyButton
              onPress={this.onAddFoodPlaceHandler}
              disabled={
                !this.state.controls.foodPlaceName.valid
                || !this.state.controls.location.valid
              }
            >
              Share the food place!
            </MyButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  button: {
    margin: 8
  },
});

const mapDispatchToProps = dispatch => {
  return {
    onAddFoodPlace: (foodPlace, location, image) => dispatch(addItem(foodPlace, location, image))
  }
}

export default connect(null, mapDispatchToProps)(ShareFoodScreen);