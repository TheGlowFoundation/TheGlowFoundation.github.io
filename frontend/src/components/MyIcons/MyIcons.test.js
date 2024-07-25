import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyIcons from './MyIcons';

describe('<MyIcons />', () => {
  test('it should mount', () => {
    render(<MyIcons />);

    const MyIcons = screen.getByTestId('MyIcons');

    expect(MyIcons).toBeInTheDocument();
  });
});