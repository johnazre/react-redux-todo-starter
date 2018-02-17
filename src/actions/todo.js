import axios from 'axios';

export const addToList = (text) => {
  return (dispatch) => dispatch({
      type: 'ADD',
      payload: text
  });
};

export const removeFromList = (text) => {
  return (dispatch) => dispatch({
      type: 'remove',
      payload: text
  });
};
