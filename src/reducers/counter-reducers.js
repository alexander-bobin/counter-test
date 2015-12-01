"use strict";

import _ from 'lodash';
import { ADD_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter-actions';

const initialState = {
  total: 0,
  counters: {}
};

function _getCounterKey (state, name) {
  let counterKeyBase = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
      counterKey = counterKeyBase,
      i = 1;
  while(state.counters.hasOwnProperty(counterKey)) {
    counterKey = counterKeyBase + i;
    i++;
  }
  return counterKey;
}

function amendCounter(state, counterKey, amount) {
  let newState = _.assign({}, state);
  let counter = newState.counters[counterKey];
  if (counter) {
    counter.count += amount;
    newState.counters[counterKey] = counter;
    newState.total += amount;
  }
  return newState;
}

function counterApp(state = initialState, action) {
  switch(action.type) {
    case ADD_COUNTER:
      let counterKey = _getCounterKey(state, action.name);
      let newCounters = {};
      newCounters[counterKey] = { name: action.name, count: 0 };
      let combinedCounters = _.assign({}, state.counters, newCounters);
      return _.assign({}, state, { counters: combinedCounters });
    case INCREMENT_COUNTER:
      return amendCounter(state, action.counterKey, 1);
    case DECREMENT_COUNTER:
      return amendCounter(state, action.counterKey, -1);
    default:
      return state;
  }
}

export default counterApp;
