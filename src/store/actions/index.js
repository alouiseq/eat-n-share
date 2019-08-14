import {
  ADD_FOOD_PLACE,
  DELETE_FOOD_PLACE,
  TRY_AUTH,
  START_LOADING,
  STOP_LOADING
} from '../actions/actionTypes';

export const addItem = (foodPlace, location, image) => {
  return dispatch => {
    dispatch(startLoading());
    fetch('https://us-central1-eat-n-share.cloudfunctions.net/storeImage', {
      method: 'POST',
      body: JSON.stringify({
        image: image.base64
      })
    })
    .then(res => res.json())
    .then(parsedRes => {
      const placeData = {
        name: foodPlace,
        location: location,
        image: parsedRes.imageUrl
      };
      fetch('https://eat-n-share.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify(placeData)
      })
      .then(res => res.json())
      .then(parsedRes => {
        console.log(parsedRes);
        dispatch(stopLoading());
      })
      .catch(err => {
        console.log(err);
        dispatch(stopLoading());
      });
    })
    .catch(err => {
      console.log(err);
      dispatch(stopLoading());
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

export const startLoading = () => ({ type: START_LOADING });
export const stopLoading = () => ({ type: STOP_LOADING });
