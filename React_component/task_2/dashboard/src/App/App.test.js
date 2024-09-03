// Create 4 tests to see if App renders a div

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
    let wrapper;

    // Test case for rendering without crashing
    it('renders without crashing', () => {
        wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    // Test case: App does not display CourseList when logged out
    it('does not display CourseList when logged out', () => {
        wrapper = shallow(<App isLoggedIn={false} displayDrawer={false} />);
        expect(wrapper.find(CourseList).exists()).toBeFalsy();
    });

    // Test cases when isLoggedIn is true
    describe('when isLoggedIn is true', () => {
        beforeAll(() => {
            wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
        });

        // Test case: does not include Login component
        it('does not include Login component', () => {
            expect(wrapper.find(Login).exists()).toBeFalsy();
        });

        // Test case: includes CourseList component
        it('includes CourseList component', () => {
            expect(wrapper.find(CourseList).exists()).toBeTruthy();
        });
    });

    // Test for the logOut function with Control + h key press
    describe('when pressing Control + h keys', () => {
        const mockLogOut = jest.fn();
        const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => { }); // Mock the alert function

        beforeEach(() => {
            wrapper = shallow(<App logOut={mockLogOut} />);
        });

        afterEach(() => {
            mockLogOut.mockClear();
            mockAlert.mockClear();
        });

        afterAll(() => {
            jest.restoreAllMocks(); // Restore original alert function
        });

        it('calls logOut function and shows alert', () => {
            // Simulate Control + h key press
            const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
            document.dispatchEvent(event);

            expect(mockAlert).toHaveBeenCalledWith('Logging you out');
            expect(mockLogOut).toHaveBeenCalled();
        });
    });
});
