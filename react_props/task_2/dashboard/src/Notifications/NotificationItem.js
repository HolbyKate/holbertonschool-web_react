import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type = 'default', value, html }) => {
    return (
        <li
            data-notification-type={type}
            dangerouslySetInnerHTML={html ? html : undefined}
        >
            {!html && value}
        </li>
    );
};

export default NotificationItem;