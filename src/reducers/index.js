import todos from './todo';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    todos,
    form: formReducer
});
export default rootReducer;
