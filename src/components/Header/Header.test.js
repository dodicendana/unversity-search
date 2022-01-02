import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'

test('Header Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
})
