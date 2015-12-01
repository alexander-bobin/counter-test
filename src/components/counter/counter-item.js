"use strict";

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="counter">
        <span className="counter__name">{this.props.name}</span> -
        &nbsp;<span className="counter__count">{this.props.count}</span> -
        &nbsp;<button className="counter__increment" onClick={(e) => { this.handleIncrement(e) }}>+</button>
        &nbsp;<button className="counter__decrement" onClick={(e) => { this.handleDecrement(e) }}>-</button>
      </div>
    );
  },
  handleIncrement: function (e) {
    this.props.onIncrement(this.props.counterKey);
  },
  handleDecrement: function(e) {
    this.props.onDecrement(this.props.counterKey);
  }

  // TODO: Declare prop types
});
