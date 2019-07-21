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

class ShareFoodScreen extends React.Component {
  state = {
    placeName: ''
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

  onChangeNameHandler = placeName => {
    this.setState({ placeName });
  }

  onAddFoodPlaceHandler = () => {
    const { placeName } = this.state;

    if (placeName.trim() !== '') {
      this.props.onAddFoodPlace(placeName);
    }
  }

  onPickImageHandler = () => (
    alert('hello')
  )

  onPickLocationHandler = () => (
    alert('hello')
  )

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MyText>
            <MyHeadingText>Share a food place with us!</MyHeadingText>
          </MyText>
          <PickImage onPickImage={this.onPickImageHandler} />
          <PickLocation onPickLocation={this.onPickLocationHandler} />
          <FoodPlaceInput
            placeName={this.state.placeName}
            onChangeText={this.onChangeNameHandler}
          />
          <View style={styles.button}>
            <MyButton
              title="Share the food place!"
              onPressHandler={this.onAddFoodPlaceHandler}
            />
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
    onAddFoodPlace: (foodPlace) => dispatch(addItem(foodPlace, sampleImage))
  }
}

export default connect(null, mapDispatchToProps)(ShareFoodScreen);