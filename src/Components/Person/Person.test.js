import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Person />, div);
  ReactDOM.unmountComponentAtNode(div);
});