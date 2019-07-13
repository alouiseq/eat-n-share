import React from 'react';
import { Button, View, Text, Image, Modal, StyleSheet } from 'react-native';

let state = { visible: false }

const FoodPlaceDetail = (props) => {
  let detail = null;

  console.log('hello');
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
        <Button
          title="Delete"
          color="red"
          onPress={props.onItemDelete}
        />
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
  }
});

export default FoodPlaceDetail;