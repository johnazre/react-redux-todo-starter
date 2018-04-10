import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store';
import './index.css';
import { fetchTodos } from './actions/todo'

const StoreInstance = Store();

console.log('the store', StoreInstance)

StoreInstance.dispatch(fetchTodos())

ReactDOM.render(
  <Provider store={StoreInstance}>
   <App />
 </Provider>,
  document.getElementById('root')
);
