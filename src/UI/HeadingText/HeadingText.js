import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});

export default MainInput = (props) => (
    <Text {...props} style={styles.headingText}>{props.children}</Text>
);