import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';

export default(initialState) => {
    return createStore(
      rootReducer,
      applyMiddleware(logger, promises())
    );
}
