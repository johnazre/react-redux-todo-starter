export const addToList = (item) => {
  return {
      type: 'add',
      item
  };
}

export const removeFromList = (item) => {
  return {
      type: 'remove',
      item
  };
}