// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

describe('Notifications Component', () => {
    it('should display the menu item when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);

        // Check that the menu item is displayed
        expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
    });

    it('should not display the div.Notifications when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);

        // Check that the Notifications div is not displayed
        expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
    });

    it('should display the menu item when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />);

        // Check that the menu item is displayed
        expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
    });

    it('should display the div.Notifications when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />);

        // Check that the Notifications div is displayed
        expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    });
});