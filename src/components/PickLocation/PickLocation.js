import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MyButton from '../UI/MyButton/MyButton';

class MapLocator extends React.Component {
  state = {
    currentVal: ''
  }

  inputChangeHandler = (type) => {
    this.setState({
      currentVal: type
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map</Text>
        </View>
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
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  button: {
    margin: 8
  },
});

export default MapLocator;