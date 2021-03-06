import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    marginBottom: 15,
    padding: 8,
    marginTop: 8,
    marginBottom: 8
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red'
  }
});

export default MainInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
      {...props}
      style={[styles.textInput, props.style, props.valid || !props.touched ? null : styles.invalid]}
    />
    </View>
  );
};