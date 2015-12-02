"use strict";

describe('CounterItem', function() {
  var CounterItem = require('../counter-item');
  var component;
  var incrementSpy;
  var decrementSpy;

  beforeEach(function() {
    incrementSpy = sinon.spy();
    decrementSpy = sinon.spy();
    component = renderIntoDocument(
      <CounterItem
        name="Bananas"
        count="12"
        counterKey="ban"
        onIncrement={incrementSpy}
        onDecrement={decrementSpy}
      />);
  });

  it('displays the name', function() {
    var node = findByClass(component, 'counter__name');
    expect(node.getDOMNode().textContent).to.contain('Bananas');
  });

  it('displays the count', function() {
    var node = findByClass(component, 'counter__count');
    expect(node.getDOMNode().textContent).to.contain('12');
  });

  it('calls onIncrement', function() {
    var node = findByClass(component, 'counter__increment');
    Simulate.click(node);
    expect(incrementSpy).to.have.been.calledWith("ban");
  });

  it('calls onDecrement', function() {
    var node = findByClass(component, 'counter__decrement');
    Simulate.click(node);
    expect(decrementSpy).to.have.been.calledWith("ban");
  });
});
