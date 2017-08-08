import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from './actions/todo';

import TodoList from './components/TodoList/TodoList'

export class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.addToList(this.state.value);
  }

  componentDidMount() {
    this.props.actions.getList();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.value}/>
          <button>Add</button>
        </form>
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
