import { render, screen } from '@testing-library/react';
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
    it('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByRole('banner')).toBeInTheDocument(); // Adjust this based on your component's structure
    });

    //Verify that the components render img and h1 tags
    it("Verify that the components render img", () => {
        const wrapper = shallow(<Header />);
        wrapper.update();
        expect(wrapper.find("div.header img")).toHaveLength(1);
    });
});