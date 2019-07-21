import React from 'react';
import { ImageBackground, View, Text, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import Button from '../../components/UI/Button/Button';
import MainInput from '../../components/UI/MainInput/MainInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import loginImage from '../../assets/food-phone.jpg';

class AuthScreen extends React.Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <ImageBackground source={loginImage} style={styles.loginImage}>
        <View style={styles.container}>
          <MainText style={styles.title}>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <Button title="Switch to Login" />
          <View style={styles.textInputContainer}>
            <MainInput placeholder="Your Email" style={styles.input} />
            <MainInput placeholder="Password" style={styles.input} />
            <MainInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <Button title="Submit" onPressHandler={this.loginHandler} />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  title: {
    marginBottom: 40
  },
  loginImage: {
    width: '100%',
    flex: 1,
  },
  textInputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  }
});

export default AuthScreen;