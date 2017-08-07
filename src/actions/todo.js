export const addToList = (text) => {
  console.log('the text', text);
  return {
      type: 'add',
      payload: text
  };
}

export const removeFromList = (text) => {
  return {
      type: 'remove',
      payload: text
  };
}
