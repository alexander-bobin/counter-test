"use strict";

import React from 'react';

export default React.createClass({
  render: function() {
    return (
      <div className="counter-add">
        <form className="counter-add__form form-inline" onSubmit={e => this.onSubmit(e) }>
          <div className="form-group">
            <label htmlFor="counter-add__input">New counter</label>&nbsp;
            <input className="counter-add__input form-control" 
              type="text"
              ref="name"
              id="counter-add__input"
              placeholder="Name"
              maxLength="100" />
          </div>&nbsp;
          <button className="counter-add__btn btn btn-primary" onClick={e => this.onAddClick(e)}>Add</button>
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
