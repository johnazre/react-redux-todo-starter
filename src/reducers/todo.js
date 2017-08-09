let initialState = []

export default(state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'add':
      return [
        ...state, {
          title: action.payload,
          completed: false,
          id: makeId()
        }
      ];
    case 'remove':
      return state.filter(item => item !== action.payload)
    case 'complete':
      return [...state]
    case 'FETCH_PENDING':
      console.log('pending')
      return [...state];
    case 'FETCH_FULFILLED':
      console.log('worked!', action.payload.data);
      return state.concat(action.payload.data);
    case 'FETCH_REJECTED':
      console.log('no workie!');
      return [...state];
    default:
      return state;
  }
};

var counter = 0
function makeId() {
  return counter++;
}
