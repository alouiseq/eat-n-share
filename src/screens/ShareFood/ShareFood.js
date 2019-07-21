import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import FoodPlaceInput from '../../components/FoodPlaceInput/FoodPlaceInput';
import { addItem } from '../../store/actions/index';
import sampleImage from '../../../src/assets/lechon.jpg';
import MyTextInput from '../../components/UI/MyTextInput/MyTextInput';
import MyText from '../../components/UI/MyText/MyText';
import MyHeadingText from '../../components/UI/MyHeadingText/MyHeadingText';

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
      <ScrollView>
        <View style={styles.container}>
          <MyText>
            <MyHeadingText>Share a food place with us!</MyHeadingText>
          </MyText>
          <View style={styles.placeholder}><Text>Image Preview!</Text></View>
          <View style={styles.button}>
            <Button title="Pick Image" />
          </View>
          <View style={styles.placeholder}><Text>Map</Text></View>
          <View style={styles.button}>
            <Button title="Locate me" />
          </View>
          <MyTextInput placeholder="Food Place Name" />
          <View style={styles.button}>
            <Button title="Share the food place!" />
          </View>
          {/* <FoodPlaceInput onAddFoodPlace={this.onAddFoodPlaceHandler} /> */}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    margin: 8
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onAddFoodPlace: (foodPlace) => dispatch(addItem(foodPlace, sampleImage))
  }
}

export default connect(null, mapDispatchToProps)(ShareFoodScreen);