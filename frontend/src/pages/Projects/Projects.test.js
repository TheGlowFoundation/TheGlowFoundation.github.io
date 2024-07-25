import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';

describe('<Projects />', () => {
  test('it should mount', () => {
    render(<Projects />);

    const Projects = screen.getByTestId('Projects');

    expect(Projects).toBeInTheDocument();
  });
});