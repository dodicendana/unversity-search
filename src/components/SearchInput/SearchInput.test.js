import { render, screen } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from './SearchInput'

test('SearchInput Rendered without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchInput />, div);
  ReactDOM.unmountComponentAtNode(div);
})
