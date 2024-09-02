// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

describe('Notifications Component', () => {
    it('should display the menu item when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);
        expect(screen.getByText(/Your notifications/)).toBeInTheDocument();
        expect(screen.queryByText(/Notifications/)).not.toBeInTheDocument();
    });

    it('should not display the div.Notifications when displayDrawer is false', () => {
        render(<Notifications displayDrawer={false} />);
        expect(screen.queryByText(/Notifications/)).not.toBeInTheDocument();
    });

    it('should display the menu item when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />);
        expect(screen.getByText(/Your notifications/)).toBeInTheDocument();
    });

    it('should display the div.Notifications when displayDrawer is true', () => {
        render(<Notifications displayDrawer={true} />);
        expect(screen.getByText(/Notifications/)).toBeInTheDocument();
    });
});