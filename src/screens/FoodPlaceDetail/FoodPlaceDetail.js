import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { deleteItem } from '../../store/actions/index';

class FoodPlaceDetail extends React.Component {
  onItemDeleteHandler = () => {
    this.props.onDeleteFoodPlace(this.props.selectedItem.key);
    this.props.navigator.pop();
  }

  render () {
    return (
      <View style={styles.foodPlaceDetailContainer}>
        <View>
          <Image
            style={styles.foodPlaceDetailImage}
            source={this.props.selectedItem.image}
          />
          <Text style={styles.foodPlaceDetailText}>
            {this.props.selectedItem.value}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.onItemDeleteHandler}>
            <View style={styles.trashIcon}>
              <Icon size={50} name="ios-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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

const mapDispatchToProps = dispatch => {
  return {
    onDeleteFoodPlace: key => dispatch(deleteItem(key))
  };
}

export default connect(null, mapDispatchToProps)(FoodPlaceDetail);