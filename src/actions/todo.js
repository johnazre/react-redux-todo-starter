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

export const getList = () => {
  return async (dispatch) => {
    dispatch({type: "FETCH_LIST_PENDING"})
    let todos = await axios.get('https://jsonplaceholder.typicode.com/todos')
    dispatch({
      type: 'FETCH',
      payload: todos
    })
  }
};
