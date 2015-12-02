"use strict";

import counterReducer from '../../../reducers/counter-reducers';
import { addCounter } from '../../../actions/counter-actions';


describe('CounterList', function() {
  var CounterList = require('../counter-list');
  var CounterItem = require('../counter-item');
  var component;
  var state;
  // Note:  No doubt there's a smarter way to handle this
  var initialState = {
    total: 0,
    counters: {}
  };

  beforeEach(function() {
    state = counterReducer(initialState, addCounter("First counter"));
    state = counterReducer(state, addCounter("Second counter"));
    state = counterReducer(state, addCounter("Third counter"));
    component = renderIntoDocument(<CounterList total={5} counters={state.counters} />);
  });

  it('renders CounterItems', function() {
    // Note:  Would prefer to scryByType with CounterItem
    //        but could not get it to work
    // var counterItemNodes = scryByType(component, CounterItem);
    var counterItemNodes = scryByClass(component, 'counter');
    expect(counterItemNodes.length).to.be.equal(3);
  });

  it('renders the total', function() {
    var totalNode = findByClass(component, 'counter-total__number');
    expect(totalNode.getDOMNode().textContent).to.be.equal('5');
  });

  // Note:  There's a possibility to test some of the wiring up / passing on of props
  //        but that'd be overkill here

});
