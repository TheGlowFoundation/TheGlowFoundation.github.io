import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ../pages/Home from './../pages/Home';

describe('<../pages/Home />', () => {
  test('it should mount', () => {
    render(<../pages/Home />);

    const ../pages/Home = screen.getByTestId('../pages/Home');

    expect(../pages/Home).toBeInTheDocument();
  });
});