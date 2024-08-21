// Create 4 tests to see if App renders a div

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import App from './App.js';


test('App renders without crashing', () => {
    render(<App />);
});

test('App renders a div with the class App-header', () => {
    const { container } = render(<App />);
    const headerElement = container.querySelector('.App-header');
    expect(headerElement).not.toBeNull();
});

test('App renders a div with the class App-body', () => {
    const { container } = render(<App />);
    const bodyElement = container.querySelector('.App-body');
    expect(bodyElement).not.toBeNull();
});

test('App renders a div with the class App-footer', () => {
    const { container } = render(<App />);
    const footerElement = container.querySelector('.App-footer');
    expect(footerElement).not.toBeNull();
});