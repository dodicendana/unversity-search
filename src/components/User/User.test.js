import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import User from './User'

test('User Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<User />, div);
  ReactDOM.unmountComponentAtNode(div);
})
