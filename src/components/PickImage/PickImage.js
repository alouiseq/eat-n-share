import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import MyButton from '../../components/UI/MyButton/MyButton';

class PickImage extends React.Component {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({title: 'Pick an Image'}, res => {
      if (res.didCancel) {
        console.log('User cancelled!');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        const image = { uri: res.uri };
        this.setState({
          pickedImage: image
        });
        this.props.onImagePick(image);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={styles.previewImage} source={this.state.pickedImage} />
        </View>
        <View style={styles.button}>
          <MyButton onPress={this.pickImageHandler}>Pick Image</MyButton>
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