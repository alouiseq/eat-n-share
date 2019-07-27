import React from 'react';
import { Dimensions, ImageBackground, View, StyleSheet } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import MyButton from '../../components/UI/MyButton/MyButton';
import MyTextInput from '../../components/UI/MyTextInput/MyTextInput';
import MyText from '../../components/UI/MyText/MyText';
import MyHeadingText from '../../components/UI/MyHeadingText/MyHeadingText';
import loginImage from '../../assets/food-phone.jpg';
import validateLogin from '../../util/validations/loginValidations.js'

class AuthScreen extends React.Component {
  state = {
    viewMode: Dimensions.get('screen').height > 500 ? 'portrait' : 'landscape',
    controls: {
      email: {
        value: '',
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: {
          equaltTo: 'password'
        },
        touched: false
      }
    }
  }

  constructor(props) {
    super(props);
    Dimensions.addEventListener('change', this.updateStyles);
  }

  componentWillUnmount () {
    Dimensions.removeEventListener('change', this.updateStyles)
  }

  updateStyles = (dims) => {
    this.setState({
      viewMode: dims.screen.height > 500 ? 'portrait' : 'landscape'
    });
  }

  loginHandler = () => {
    startMainTabs();
  }

  updateInputState = (key, value) => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid: key === 'password'
              ? validateLogin(
                'confirmPassword',
                prevState.controls.confirmPassword.value,
                prevState.controls.confirmPassword.validationRules,
                value
              )
              : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            valid: validateLogin(
              key,
              value,
              this.state.controls[key].validationRules,
              this.state.controls.password.value
            ),
            value: value,
            touched: true
          },
        }
      };
    });
  }

  render () {
    let headingText = null;

    if (this.state.viewMode === 'portrait') {
      headingText = (
        <MyText style={styles.title}>
          <MyHeadingText>Please Log In</MyHeadingText>
        </MyText>
      );
    }

    return (
      <ImageBackground source={loginImage} style={styles.loginImage}>
        <View style={styles.container}>
          {headingText}
          <MyButton title="Switch to Login" />
          <View style={styles.textInputContainer}>
            <MyTextInput
              placeholder="Your Email"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={(val) => this.updateInputState('email', val)}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
            />
            <View style={this.state.viewMode === 'portrait'
              ? styles.portraitPasswordContainer
              : styles.landscapePasswordContainer
            }>
              <View style={this.state.viewMode === 'portrait'
                ? styles.portraitPasswordWrapper
                : styles.landscapePasswordWrapper
              }>
                <MyTextInput
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={(val) => this.updateInputState('password', val)}
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                />
              </View>
              <View style={this.state.viewMode === 'portrait'
                ? styles.portraitPasswordWrapper
                : styles.landscapePasswordWrapper
              }>
                <MyTextInput
                  placeholder="Confirm Password"
                  style={styles.input}
                  value={this.state.controls.confirmPassword.value}
                  onChangeText={(val) => this.updateInputState('confirmPassword', val)}
                  valid={this.state.controls.confirmPassword.valid}
                  touched={this.state.controls.confirmPassword.touched}
                />
              </View>
            </View>
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
    marginBottom: 10
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
  },
  portraitPasswordContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  landscapePasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  portraitPasswordWrapper: {
    width: '100%'
  },
  landscapePasswordWrapper: {
    width: '45%'
  }
});

export default AuthScreen;