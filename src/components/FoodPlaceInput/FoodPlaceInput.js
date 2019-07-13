import React from 'react';
import { Button, View, TextInput, StyleSheet } from 'react-native';

class FoodPlaceInput extends React.Component {
  state = {
    currentVal: ''
  }

  inputChangeHandler = (type) => {
    this.setState({
      currentVal: type
    });
  }

  render() {
    return (
      <View style={styles.userInputContainer}>
        <TextInput
          style={styles.userInput}
          onChangeText={this.inputChangeHandler}
          placeholder="Add a type of food"
          value={this.state.currentVal}
        />
        <Button
          title="Add"
          onPress={() => this.props.onAddFoodPlace(this.state.currentVal)}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  userInputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  userInput: {
    borderColor: 'green',
    width: 300,
  }
})

export default FoodPlaceInput;