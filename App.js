import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import FoodPlaceList from './src/components/FoodPlaceList/FoodPlaceList';
import FoodPlaceInput from './src/components/FoodPlaceInput/FoodPlaceInput';
import FoodPlaceDetail from './src/components/FoodPlaceDetail/FoodPlaceDetail';
import {
  addItem,
  deleteItem,
  selectItem,
  deselectItem
} from './src/store/actions/index'
import sampleImage from './src/assets/lechon.jpg';

class App extends Component {
  foodPlaceAddHandler = (value) => {
    this.props.onAddItem(value, sampleImage);
  }

  selectedItemHandler = (selectedKey) => {
    this.props.onSelectItem(selectedKey);
  }

  deleteItemHandler = () => {
    this.props.onDeleteItem();
  };

  closeModalHandler = () => {
    this.props.onDeselectItem();
  }

  render() {
    const { selectedItem, foodPlaces } = this.props;
    return (
      <View style={styles.container}>
        <FoodPlaceDetail
          selectedItem={selectedItem}
          onItemDelete={this.deleteItemHandler}
          onModalClose={this.closeModalHandler}
        />
        <FoodPlaceInput
          onAddFoodPlace={this.foodPlaceAddHandler}
        />
        <FoodPlaceList
          foodPlaces={foodPlaces}
          onItemSelect={this.selectedItemHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 40,
    marginLeft: 20
  }
});

const mapStateToProps = state => {
  const { foodPlaces, selectedItem } = state.foodPlaces;

  return {
    foodPlaces,
    selectedItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (value, image) => (
      dispatch(addItem(value, image))
    ),
    onDeleteItem: () => (
      dispatch(deleteItem())
    ),
    onSelectItem: (key) => (
      dispatch(selectItem(key))
    ),
    onDeselectItem: () => (
      dispatch(deselectItem())
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);