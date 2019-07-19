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
  }
});

export default Button = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPressHandler}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
};