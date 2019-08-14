import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';

const FoodPlaceList = (props) => {
  return (
    <FlatList
      style={styles.foodPlaceListContainer}
      data={props.foodPlaces}
      renderItem={(info) => (
        <ListItem
          foodPlace={info.item.name}
          foodPlaceImage={info.item.image}
          onItemSelect={() => props.onItemSelect(info.item.key)}
        />
      )}
    />
  )
};

const styles = StyleSheet.create({
  foodPlaceListContainer: {
    marginTop: 10
  },
});

export default FoodPlaceList