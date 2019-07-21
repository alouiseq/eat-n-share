import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyTextInput from '../../components/UI/MyTextInput/MyTextInput';
import MyText from '../../components/UI/MyText/MyText';
import MyHeadingText from '../../components/UI/MyHeadingText/MyHeadingText';
import loginImage from '../../assets/food-phone.jpg';

class AuthScreen extends React.Component {
  loginHandler = () => {
    startMainTabs();
  }

  render () {
    return (
      <ImageBackground source={loginImage} style={styles.loginImage}>
        <View style={styles.container}>
          <MyText style={styles.title}>
            <MyHeadingText>Please Log In</MyHeadingText>
          </MyText>
          <MyButton title="Switch to Login" />
          <View style={styles.textInputContainer}>
            <MyTextInput placeholder="Your Email" style={styles.input} />
            <MyTextInput placeholder="Password" style={styles.input} />
            <MyTextInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <MyButton title="Submit" onPressHandler={this.loginHandler} />
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