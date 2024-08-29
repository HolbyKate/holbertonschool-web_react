import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
    it("Footer renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    //Verify that the components at the very least render the text “Copyright”
    it('renders the copyright text', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});