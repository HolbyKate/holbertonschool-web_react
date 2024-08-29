// Create 4 tests to see if App renders a div

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });
});