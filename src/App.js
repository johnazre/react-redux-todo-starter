import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todo';

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList/TodoList'

export class App extends Component {

  mySubmit(values) {
    console.log('the vals', values);
    console.log('the props', this);
    this.props.actions.addToList(values.title)
  }

  render() {
    return (
      <div>
        <TodoInput onSubmit={this.mySubmit.bind(this)}/>
        <TodoList/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(App);
