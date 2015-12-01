"use strict";

/* Action types */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ADD_COUNTER = 'ADD_COUNTER';

/* Action creators */
export function addCounter (name) {
  return { type: ADD_COUNTER, name }
}
export function incrementCounter (counterKey) {
  return { type: INCREMENT_COUNTER, counterKey }
}
export function decrementCounter (counterKey) {
  return { type: DECREMENT_COUNTER, counterKey }
}
