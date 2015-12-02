"use strict";

import React from 'react';
import { connect } from 'react-redux';
import CounterList from '../counter/counter-list';
import { addCounter, incrementCounter, decrementCounter } from '../../actions/counter-actions';

var App = React.createClass({
  render: function() {
    // Redux-grok: Access to dispatch here is one of the reasons we use connect
    // down below
    const { dispatch } = this.props;
    return (
      <div className="app container">
        <h1 className="app__header">Counter App</h1>
        <div className="row">
          <div className="col-md-5">
            <CounterList
              total={this.props.total}
              counters={this.props.counters}
              onCounterAdd={name => dispatch(addCounter(name))}
              onIncrementCounter={key => dispatch(incrementCounter(key))}
              onDecrementCounter={key => dispatch(decrementCounter(key))}
            />
          </div>
        </div>
      </div>
    );
  },
});

// Return the whole state, we don't need to return only a part of it
// Redux-grok: The state gets smushed into props
function select (state) {
  return state;
}

// Redux-grok: Using connect gives use access to dispatch on props inside the component
export default connect(select)(App);
