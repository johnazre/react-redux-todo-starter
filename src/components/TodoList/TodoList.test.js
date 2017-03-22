import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './TodoListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoListItem />, div);
});
