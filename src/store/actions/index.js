import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE,
  TRY_AUTH
} from '../actions/actionTypes';

export const addItem = (foodPlace, location, image) => {
  return dispatch => {
    const placeData = {
      name: foodPlace,
      location: location
    };
    fetch('https://us-central1-eat-n-share.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    // fetch('https://eat-n-share.firebaseio.com/places.json', {
    //   method: 'POST',
    //   body: JSON.stringify(placeData)
    // })
    .catch(err => console.log(err))
    .then(res => res.json())
    .then(parsedRes => {
      console.log(parsedRes);
    });
    // return {
    //   type: ADD_FOOD_PLACE,
    //   foodPlace: {
    //     key: Math.random().toString(),
    //     foodPlace,
    //     location,
    //     image
    //   }
    // };
  }
};

export const deleteItem = (key) => {
  return {
    type: DELETE_FOOD_PLACE,
    foodPlaceKey: key
  };
};

export const tryAuth = (authData) => ({
  type: TRY_AUTH,
  authData: authData
});
