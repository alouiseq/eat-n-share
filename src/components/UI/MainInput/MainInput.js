import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    marginBottom: 15,
    padding: 8
  }
});

export default MainInput = (props) => {
  return (
    <View>
      <TextInput
      {...props}
      style={[styles.textInput, props.style]}
    />
    </View>
  );
};