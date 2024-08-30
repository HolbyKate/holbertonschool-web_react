import { shallow, mount, render } from 'enzyme';
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
    it("Footer renders without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toEqual(true);
    });

    //Verify that the components at the very least render the text “Copyright”
    it("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
    });
});