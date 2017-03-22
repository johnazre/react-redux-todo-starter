export const addToList = (item) => {
  console.log('adding item:', item);
  return {
      type: 'add',
      item
  };
}

export const removeFromList = (item) => {
  console.log('removing item:', item);
  return {
      type: 'remove',
      item
  };
}