import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Counter from './Counter';

test('renders heading', async () => {
  mockNextFetch_InitialGet();
  const { findByText } = render(<Counter />);
  const headingElement = await findByText('Counter');
  expect(headingElement).toBeInTheDocument();
});

test('renders "Loading..." message', () => {
  mockNextFetch_CancelInitialGet();
  const { getByText } = render(<Counter />);
  const element = getByText('Loading...');
  expect(element).toBeInTheDocument();
});

test('renders "You clicked" message', async () => {
  mockNextFetch_InitialGet();
  const { findByText } = render(<Counter />);
  const element = await findByText(/You clicked /);
  expect(element).toBeInTheDocument();
});

test('renders "You clicked 0 times" message after initial fetch', async () => {
  mockNextFetch_InitialGet();
  const { findByText } = render(<Counter />);
  const element = await findByText('You clicked 0 times');
  expect(element).toBeInTheDocument();
});

test('renders "You clicked 1 times" message after first submission', async () => {
  mockNextFetch_InitialGet();
  const { findByText, getByText } = render(<Counter />);
  let element = await findByText('You clicked 0 times');
  expect(element).toBeInTheDocument();
  mockNextFetch_ClickIncrement();
  fireEvent.click(getByText('Click me'));
  element = await findByText('You clicked 1 times');
  expect(element).toBeInTheDocument();
});

test('renders "You clicked 0 times" after pressing reset', async () => {
  mockNextFetch_InitialGet();
  const { findByText, getByText } = render(<Counter />);
  let element = await findByText('You clicked 0 times');
  expect(element).toBeInTheDocument();
  mockNextFetch_ClickIncrement();
  fireEvent.click(getByText('Click me'))
  element = await findByText('You clicked 1 times');
  expect(element).toBeInTheDocument();
  mockNextFetch_Reset();
  fireEvent.click(getByText(/Reset/))
  element = await findByText('You clicked 0 times');
  expect(element).toBeInTheDocument();
});

/* Mocked fetch requests */

function mockNextFetch_InitialGet() {
  let fakeResponse = { count: 0 };
  jest.spyOn(window, 'fetch')
    .mockResolvedValueOnce({ json: () => Promise.resolve(fakeResponse) });
}

function mockNextFetch_CancelInitialGet() {
  let fakeResponse = { count: undefined };
  jest.spyOn(window, 'fetch')
    .mockResolvedValueOnce({ json: () => Promise.resolve(fakeResponse) });
}

function mockNextFetch_ClickIncrement() {
  let fakeResponse = { count: 1 };
  jest.spyOn(window, 'fetch')
    .mockResolvedValueOnce({ json: () => Promise.resolve(fakeResponse) });
}

function mockNextFetch_Reset() {
  jest.spyOn(window, 'fetch').mockResolvedValueOnce(null);
}
