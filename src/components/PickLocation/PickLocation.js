import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import MyButton from '../UI/MyButton/MyButton';

class MapLocator extends React.Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get('window').width
        / Dimensions.get('window').height
        * 0.0122
    }
  }

  // inputChangeHandler = (type) => {
  //   this.setState({
  //     currentVal: type
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          initialRegion={this.state.focusedLocation}
          style={styles.map}
        />
        <View style={styles.button}>
            <MyButton onPress={this.props.onPickLocation}>Locate me</MyButton>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center'
  },
  map: {
    width: '100%',
    height: 250
  },
  button: {
    margin: 8
  },
});

export default MapLocator;