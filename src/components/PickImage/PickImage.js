import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import MyButton from '../../components/UI/MyButton/MyButton';
import SampleImage from '../../assets/lechon.jpg';

class PickImage extends React.Component {
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
          <Image style={styles.previewImage} source={SampleImage} />
        </View>
        <View style={styles.button}>
          <MyButton
            title="Pick Image"
            onPress={this.props.onPickImage}
          />
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
  previewImage: {
    width: '100%',
    height: '100%'
  },
  button: {
    margin: 8
  }
});

export default PickImage;