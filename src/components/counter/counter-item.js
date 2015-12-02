"use strict";

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="counter row">
        <div className="counter__details col-md-9">
          <span className="counter__name">{this.props.name}</span>:&nbsp;
          <span className="counter__count">{this.props.count}</span>&nbsp;
        </div>
        <div className="counter__controls">
          <div className="btn-group" role="group">
            <button className="counter__increment btn btn-default btn-sm" onClick={(e) => { this.handleIncrement(e) }}>+</button>
            <button className="counter__decrement btn btn-default btn-sm" onClick={(e) => { this.handleDecrement(e) }}>-</button>
          </div>
        </div>
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
