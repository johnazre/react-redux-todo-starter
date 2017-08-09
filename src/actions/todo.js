import axios from 'axios';

export const addToList = (text) => {
  console.log('the text', text);
  return {
      type: 'add',
      payload: text
  };
}

export const removeFromList = (text) => {
  console.log(text);
  return {
      type: 'remove',
      payload: text
  };
}

export const getList = () => {
  return {
      type: 'FETCH',
      payload: axios.get('http://localhost:8000/todos')
  };
}
