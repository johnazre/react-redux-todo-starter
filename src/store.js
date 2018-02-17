import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default(initialState) => {
    return createStore(
      rootReducer,
      compose(
        applyMiddleware(logger, thunkMiddleware)
      )
    );
}
