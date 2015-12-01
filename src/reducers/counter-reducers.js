import _ from 'lodash';
import { ADD_COUNTER, INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter-actions';

const initialState = {};

function _getCounterKey (state, name) {
  let counterKeyBase = name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(),
      counterKey = counterKeyBase,
      i = 1;
  while(state.hasOwnProperty(counterKey)) {
    counterKey = counterKeyBase + i;
    i++;
  }
  return counterKey;
}

function amendCounter(state, counterKey, amount) {
  let counter = state[counterKey];
  let augmentedState = {};
  if (counter) {
    counter.count += amount;
    augmentedState[counterKey] = counter;
  }
  return _.assign({}, state, augmentedState);
}

function counterApp(state = initialState, action) {
  switch(action.type) {
    case ADD_COUNTER:
      let counterKey = _getCounterKey(state, action.name);
      let addedState = {};
      addedState[counterKey] = { name: action.name, count: 0 };
      return _.assign({}, state, addedState);
    case INCREMENT_COUNTER:
      return amendCounter(state, action.counterKey, 1);
    case DECREMENT_COUNTER:
      return amendCounter(state, action.counterKey, -1);
    default:
      return state;
  }
}

export default counterApp;
