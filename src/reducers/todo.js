let initialState = [];

export default(state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...state, {
          title: action.payload,
          completed: false,
          id: makeId()
        }
      ];
    case 'remove':
      return state.filter(item => item !== action.payload);
    case 'complete':
      return [...state];
    case "FETCH_TODOS":
      return [...action.payload.data]
    default:
      return state;
  }
};

var counter = 0;
function makeId() {
  return counter++;
}
