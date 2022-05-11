import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();
});

test('logo img is supported with alt text', () => {
  render(<App />);
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
  screen.debug();
});

test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});