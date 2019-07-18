import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FoodPlaceDetail = (props) => {
  const detail = (
    <View>
      <Image
        style={styles.foodPlaceDetailImage}
        source={props.selectedItem.image}
      />
      <Text style={styles.foodPlaceDetailText}>
        {props.selectedItem.value}
      </Text>
    </View>
  );

  return (
    <View style={styles.foodPlaceDetailContainer}>
      {detail}
      <View>
        <TouchableOpacity onPress={props.onItemDelete}>
          <View style={styles.trashIcon}>
            <Icon size={50} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  foodPlaceDetailContainer: {
    marginTop: 50,
    alignItems: 'center'
  },
  foodPlaceDetailImage: {
    height: 200,
    width: 200
  },
  foodPlaceDetailText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  trashIcon: {
    alignItems: 'center'
  }
});

export default FoodPlaceDetail;