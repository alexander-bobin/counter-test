"use strict";

describe('CounterItem', function() {
  var AddCounter = require('../add-counter');
  var component;
  var onAddSpy;

  beforeEach(function() {
    onAddSpy = sinon.spy();
    component = renderIntoDocument(<AddCounter onAdd={onAddSpy} />);
  });

  it('calls onAdd when the button is clicked', function() {
    var input = findByClass(component, 'counter-add__input');
    var btn = findByClass(component, 'counter-add__btn');

    input.value = 'Test counter click';
    Simulate.click(btn);

    onAddSpy.should.have.been.calledWith('Test counter click');
  });

  it('calls onAdd when the form is submitted', function() {
    var input = findByClass(component, 'counter-add__input');
    var form = findByClass(component, 'counter-add__form');

    input.value = 'Test counter submit';
    Simulate.submit(form);

    onAddSpy.should.have.been.calledWith('Test counter submit');
  });

  it('trims the name', function() {
    var input = findByClass(component, 'counter-add__input');
    var btn = findByClass(component, 'counter-add__btn');

    input.value = ' Test trimmer   ';
    Simulate.click(btn);

    onAddSpy.should.have.been.calledWith('Test trimmer');
  });

  it('does not call onAdd when the name is empty', function() {
    var input = findByClass(component, 'counter-add__input');
    var btn = findByClass(component, 'counter-add__btn');

    input.value = '  ';
    Simulate.click(btn);

    onAddSpy.should.not.have.been.called;
  });

});
