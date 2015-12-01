"use strict";

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="counter">
        <span className="counter__name">{this.props.name}</span> -
        &nbsp;<span className="counter__count">{this.props.count}</span> -
        &nbsp;<button onClick={(e) => { this.handleIncrement(e) }}>+</button>
        &nbsp;<button onClick={(e) => { this.handleDecrement(e) }}>-</button>
      </div>
    );
  },
  handleIncrement: function (e) {
    this.props.onIncrementCounter(this.props.counterKey);
  },
  handleDecrement: function(e) {
    this.props.onDecrementCounter(this.props.counterKey);
  }
});
