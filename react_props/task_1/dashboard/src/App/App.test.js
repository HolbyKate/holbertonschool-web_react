// Create 4 tests to see if App renders a div

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Notifications from './Notifications';

describe("<App />", () => {
    it("App renders without crashing", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toEqual(true);
    });

    //Import Notification component
    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).length).toBe(1);
    });

    //Import Header component
    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).length).toBe(1);
    });

    //Import Login component
    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).length).toBe(1);
    });

    //Import Footer component
    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).length).toBe(1);
    });
});
