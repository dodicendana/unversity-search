import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'

test('Card Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
})
