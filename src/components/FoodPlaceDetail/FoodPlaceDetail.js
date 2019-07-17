import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, View, Text, Image, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const FoodPlaceDetail = (props) => {
  let detail = null;

  if (props.selectedItem) {
    detail = (
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
  }

  return <Modal visible={props.selectedItem !== null}>
    <View style={styles.foodPlaceDetailContainer}>
      {detail}
      <View>
        <TouchableOpacity onPress={props.onItemDelete}>
          <View style={styles.trashIcon}>
            <Icon size={50} name="ios-trash" color="red" />
          </View>
        </TouchableOpacity>
        <Button
          title="Close"
          onPress={props.onModalClose}
        />
      </View>
    </View>
  </Modal>
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