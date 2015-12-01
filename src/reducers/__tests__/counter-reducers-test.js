"use strict";

import counterReducer from '../counter-reducers';
import { addCounter, incrementCounter, decrementCounter } from '../../actions/counter-actions';

describe('Counter reducers', function() {
  
  var initialState = {
    total: 0,
    counters: {}
  }

  it('returns the initial state', function() {
    expect(counterReducer(initialState, {})).to.eql({
      total: 0,
      counters: {}
    });
  });

  describe('adds new counters', function () {

    it('to an empty state', function() {
      var state = counterReducer(initialState, addCounter('Test counter'));
      expect(state).to.eql({
        total: 0,
        counters: {
          testcounter: {
            name: 'Test counter',
            count: 0
          }
        }
      });
    });
    it('to a state with an existing counter', function() {
      var state = counterReducer(initialState, addCounter('Test counter'));
      state = counterReducer(state, addCounter('Second test counter'));

      expect(state).to.eql({
        total: 0,
        counters: {
          testcounter: {
            name: 'Test counter',
            count: 0
          },
          secondtestcounter: {
            name: 'Second test counter',
            count: 0
          }
        }
      });
    });

    it('to a state with existing counters with the same name', function() {
      var state = counterReducer(initialState, addCounter('Test counter'));
      state = counterReducer(state, addCounter('Test counter'));
      state = counterReducer(state, addCounter('Test counter'));

      expect(state).to.eql({
        total: 0,
        counters: {
          testcounter: {
            name: 'Test counter',
            count: 0
          },
          testcounter1: {
            name: 'Test counter',
            count: 0
          },
          testcounter2: {
            name: 'Test counter',
            count: 0
          }
        }
      });
    });

  });

  it('increments a counter', function () {
    var state = counterReducer(initialState, addCounter('Test counter'));
    state = counterReducer(state, incrementCounter('testcounter'));
    expect(state).to.eql({
      total: 1,
      counters: {
        testcounter: {
          name: 'Test counter',
          count: 1
        }
      }
    });
    state = counterReducer(state, incrementCounter('testcounter'));
    expect(state).to.eql({
      total: 2,
      counters: {
        testcounter: {
          name: 'Test counter',
          count: 2
        }
      }
    });
  });

  it('decrements a counter', function () {
    var state = counterReducer(initialState, addCounter('Test counter'));
    state = counterReducer(state, decrementCounter('testcounter'));
    expect(state).to.eql({
      total: -1,
      counters: {
        testcounter: {
          name: 'Test counter',
          count: -1
        }
      }
    });
    state = counterReducer(state, incrementCounter('testcounter'));
    state = counterReducer(state, incrementCounter('testcounter'));
    state = counterReducer(state, incrementCounter('testcounter'));
    state = counterReducer(state, decrementCounter('testcounter'));
    expect(state).to.eql({
      total: 1,
      counters: {
        testcounter: {
          name: 'Test counter',
          count: 1
        }
      }
    });
  });
});
