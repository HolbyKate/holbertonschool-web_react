// Create 4 tests to see if App renders a div

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component tests', () => {
    test('App renders without crashing', () => {
        shallow(<App />);
    });

    test('App renders a div with the class App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    test('App renders a div with the class App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    test('App renders a div with the class App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
});