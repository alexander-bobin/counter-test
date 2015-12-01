"use strict";

import React from 'react';
import _ from 'lodash';
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
          onIncrementCounter={this.props.onIncrementCounter}
          onDecrementCounter={this.props.onDecrementCounter} />);
    });
    return (
      <div className="counter-list">
        <form onSubmit={e => this.onSubmit(e) }>
          <input type="text" ref="name" /> <button onClick={e => this.onAddClick(e)}>Add</button>
        </form>
        {counterItems}
      </div>
    );
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.onAddClick(e);
  },
  onAddClick: function (e) {
    var node = this.refs.name;
    var name = node.value.trim();
    if (!name) return;
    this.props.onCounterAdd(name);
    node.value = '';
  }
});
