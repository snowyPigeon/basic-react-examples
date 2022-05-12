import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

// A good pattern to follow is described below:
// arrange - arrange the settings, such as prepping a database or rendering an element
// act - act on the target, such as calling a function
// assert - assert the expected outcomes
// For more detail about arrange-act-assert, see the article Arrange-Act-Assert: A Pattern for Writing Good Tests
// at https://automationpanda.com/2020/07/07/arrange-act-assert-a-pattern-for-writing-good-tests/

// note use of screen.debug() is an optional way to view the document tree within your test console

// unit test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug();
});

// unit test
test('logo img is supported with alt text', () => {
  render(<App />);
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();
  screen.debug();
});

// user event test
test("Test theme button toggle", () => {
  render(<App />);
  const buttonEl = screen.getByText(/Current theme/i);
    
  userEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/dark/i);
});