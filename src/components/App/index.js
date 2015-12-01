"use strict";

import React from 'react';
import { connect } from 'react-redux';
import CounterList from '../counter/counter-list';
import { addCounter, incrementCounter, decrementCounter } from '../../actions/counter-actions';

var App = React.createClass({
  render: function() {
    const { dispatch } = this.props;
    return (
      <div className="App">
        <h1 className="App__header">Counter App</h1>
        <CounterList
          counters={this.props.counters}
          onCounterAdd={name => dispatch(addCounter(name))}
          onIncrementCounter={key => dispatch(incrementCounter(key))}
          onDecrementCounter={key => dispatch(decrementCounter(key))}
        />
      </div>
    );
  },
});

// Return the whole state, we don't need to return only a part of it
function select (state) {
  return { counters: state };
}

export default connect(select)(App);
