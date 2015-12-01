"use strict";

// Not so big on needing to create a store just for tests
// Presume there is some way to mock it easily with redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../../../reducers/counter-reducers';
var store = createStore(counterReducer);

describe('App', function() {
  var App = require('../index');
  var component;

  beforeEach(function() {
    component = renderIntoDocument(<Provider store={store}><App/></Provider>);
  });

  it('should render the App header', function() {
    var header = findByTag(component, 'h1');
    expect(header.getDOMNode().textContent).to.contain('Counter App');
  });
});
