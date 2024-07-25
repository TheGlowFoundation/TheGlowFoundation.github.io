import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Articles from './Articles';

describe('<Articles />', () => {
  test('it should mount', () => {
    render(<Articles />);

    const Articles = screen.getByTestId('Articles');

    expect(Articles).toBeInTheDocument();
  });
});