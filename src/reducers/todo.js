let initialState = []

export default (state = initialState, action) => {
  console.log(action);
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    title: action.payload,
                    completed: false,
                    id: makeId()
                }
            ];
        case 'remove':
            return state.filter(item => item !== action.item)
        case 'complete':
            return [...state]
        default:
            return state;
    }
};

var counter = 0
function makeId() {
    return counter++;
}
