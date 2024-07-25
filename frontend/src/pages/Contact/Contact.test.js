import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

describe('<Contact />', () => {
  test('it should mount', () => {
    render(<Contact />);

    const Contact = screen.getByTestId('Contact');

    expect(Contact).toBeInTheDocument();
  });
});