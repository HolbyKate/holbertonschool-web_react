// NotificationItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
    test('renders without crashing', () => {
        render(<NotificationItem />);
    });

    test('renders the correct type and value', () => {
        render(<NotificationItem type="default" value="test" />);
        const listItem = screen.getByText('test');
        expect(listItem).toHaveAttribute('data-notification-type', 'default');
    });

    test('renders the correct html content', () => {
        const htmlContent = { __html: '<u>test</u>' };
        render(<NotificationItem html={htmlContent} />);
        const listItem = screen.getByRole('listitem');
        expect(listItem.innerHTML).toBe('<u>test</u>');
    });
});