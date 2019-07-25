import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ListItem = (props) => (
  <TouchableOpacity onPress={props.onItemSelect}>
    <View style={styles.listItemContainer}>
      <Image 
        style={styles.listItemImage}
        source={props.foodPlaceImage}
      />
      <Text>
        {props.foodPlace}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItemContainer: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 5,
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemImage: {
    marginRight: 8,
    height: 30,
    width: 30 
  },
});

export default ListItem;