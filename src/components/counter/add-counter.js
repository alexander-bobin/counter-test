"use strict";

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="counter-add">
        <form className="counter-add__form" onSubmit={e => this.onSubmit(e) }>
          <input className="counter-add__input" type="text" ref="name" />
          <button className="counter-add__btn" onClick={e => this.onAddClick(e)}>Add</button>
        </form>
      </div>
    );
  },
  onSubmit: function (e) {
    e.preventDefault();
    this.onAddClick();
  },
  onAddClick: function () {
    var node = this.refs.name;
    var name = node.value.trim();
    if (!name) return;
    this.props.onAdd(name);
    node.value = '';
  }

  // TODO: Declare prop types
});
