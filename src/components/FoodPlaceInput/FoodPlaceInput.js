import React from 'react';
import { View, StyleSheet } from 'react-native';

import MyTextInput from '../../components/UI/MyTextInput/MyTextInput';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})

export default FoodPlaceInput = props => (
  <View style={styles.container}>
    <MyTextInput
      placeholder="Food Place Name"
      onChangeText={props.onChangeText}
      value={props.placeName}
    />
  </View>
)
