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

// export const fetchTodos = () => {
//   return {
//     type: "FETCH_TODOS",
//     payload: axios.get(`https://jsonplaceholder.typicode.com/todos`)
//   }
// }

// export const fetchTodos = () => {
//   return (dispatch) => {
//     axios.get(`https://jsonplaceholder.typicode.com/todos`)
//       .then(res => dispatch({
//         type: "FETCH_TODOS",
//         payload: res
//       }))
//       .catch(err => dispatch({
//         type: "ERR_FETCH_TODOS",
//         payload: err
//       }))
//   }
// }

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      let todos = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
      dispatch({
        type: "FETCH_TODOS",
        payload: todos
      })
    } catch (err) {
      dispatch({
        type: "ERR_FETCH_TODOS",
        payload: err
      })
    }
  }
}
