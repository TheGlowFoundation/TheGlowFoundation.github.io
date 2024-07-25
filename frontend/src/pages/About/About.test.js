import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

describe('<About />', () => {
  test('it should mount', () => {
    render(<About />);

    const About = screen.getByTestId('About');

    expect(About).toBeInTheDocument();
  });
});