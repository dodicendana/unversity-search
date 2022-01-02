import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import Body from './Body'

test('Body Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Body />, div);
  ReactDOM.unmountComponentAtNode(div);
})
