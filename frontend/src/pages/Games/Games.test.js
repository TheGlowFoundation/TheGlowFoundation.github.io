import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Games from './Games';

describe('<Games />', () => {
  test('it should mount', () => {
    render(<Games />);

    const Games = screen.getByTestId('Games');

    expect(Games).toBeInTheDocument();
  });
});