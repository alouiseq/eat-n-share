import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainText: {
    // color: '#fff',
    backgroundColor: 'transparent'
  }
});

export default MainText = (props) => (
    <Text style={[styles.mainText, props.style]}>{props.children}</Text>
);