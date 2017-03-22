import React from 'react';
import ReactDOM from 'react-dom';
import { TodoList } from './TodoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoList />, div);
});

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   expect(true).toBe(true);
// });
