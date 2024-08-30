import { shallow, mount, render } from 'enzyme';
import React from "react";
import Login from "./Login";

describe("<Login />", () => {
    it("Login renders without crashing", () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.exists()).toEqual(true);
    });

    //Verify that the components renders 2 input tags and 2 label tags
    it('renders 2 input and 2 label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input').length).toBe(2);
        expect(wrapper.find('label').length).toBe(2);
    });
});