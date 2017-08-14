import axios from 'axios';

export const addToList = (text) => {
  return {
      type: 'ADD',
      // payload: axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      //     title: text,
      //     body: 'blah'
      //   })
      payload: text
  };
};

export const removeFromList = (text) => {
  console.log(text);
  return {
      type: 'remove',
      payload: text
  };
};

export const getList = () => {
  return {
      type: 'FETCH',
      payload: axios.get('http://localhost:8000/todos')
  };
};
