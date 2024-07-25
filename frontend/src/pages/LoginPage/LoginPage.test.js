import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  test('it should mount', () => {
    render(<LoginPage />);

    const LoginPage = screen.getByTestId('LoginPage');

    expect(LoginPage).toBeInTheDocument();
  });
});