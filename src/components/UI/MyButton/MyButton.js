import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#33ccff'
  },
  disabled: {
    backgroundColor: '#eee',
    borderColor: '#aaa'
  },
  disabledText: {
    color: '#aaa'
  }
});

export default Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.disabled ? styles.disabled : null]}
      onPress={props.onPressHandler}
      disabled={props.disabled}
    >
      <Text style={props.disabled ? styles.disabledText : null}>
        {props.children}
      </Text>
    </TouchableOpacity>
  )
};