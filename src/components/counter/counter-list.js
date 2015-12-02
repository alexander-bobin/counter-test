"use strict";

import React from 'react';
import _ from 'lodash';
import AddCounter from './add-counter';
import CounterItem from './counter-item';

export default React.createClass({

  render: function() {
    let counterItems = [];
    let counters = this.props.counters;
    _.forEach(counters, (counter, key) => {
      counterItems.push(
        <CounterItem
          key={key}
          name={counter.name}
          count={counter.count}
          counterKey={key}
          onIncrement={this.props.onIncrementCounter}
          onDecrement={this.props.onDecrementCounter} />);
    });
    return (
      <div className="panel panel-default">
        <div className="counter-total panel-heading">
          Total: <span className="counter-total__number">{this.props.total}</span>
        </div>
        <div className="panel-body">
          {counterItems}
          <AddCounter onAdd={this.props.onCounterAdd} />
        </div>
      </div>
    );
  }
  
  // TODO: Declare prop types
});
