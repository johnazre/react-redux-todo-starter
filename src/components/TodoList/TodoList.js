import React, { Component } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todo';

export class TodoList extends Component {

  render () {
    if(this.props.todos) {
      const theTodos = this.props.todos.map(todo => {
        return <li key={todo.id}>{todo.title} <button onClick={() => this.props.actions.removeFromList(todo)}>x</button>  </li>
      })
      return (
        <div>
          <ul>
            {theTodos}
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <h3>List some todos!</h3>
        </div>
      )
    }
  }
}

function mapStateToProps(state, props) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// export default TodoList;
