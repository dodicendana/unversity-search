import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites'

test('Favorites Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Favorites />, div);
  ReactDOM.unmountComponentAtNode(div);
})
