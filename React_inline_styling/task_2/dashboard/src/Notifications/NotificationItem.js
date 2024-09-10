import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


// Define styles using Aphrodite
const styles = StyleSheet.create({
    defaultItem: {
        color: 'blue',
        padding: '10px 5px',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#f0f0f0',
        },
    },
    urgentItem: {
        color: 'red',
        padding: '10px 5px',
        cursor: 'pointer',
        fontWeight: 'bold',
        ':hover': {
            backgroundColor: '#f0f0f0',
        },
    },
});

// Pure NotificationItem Component using React.memo
const NotificationItem = React.memo(({ type, value, html, markAsRead, id }) => {
    const handleClick = () => {
        markAsRead(id);
    };

    const listItemStyle = type === 'urgent' ? styles.urgentItem : styles.defaultItem;
    if (html) {
        return (
            <li
                className={css(listItemStyle)}
                data-notification-type={type}
                dangerouslySetInnerHTML={html}
                onClick={handleClick}
            />
        );
    }
    return (
        <li
            className={css(listItemStyle)}
            data-notification-type={type}
            onClick={handleClick}
        >
            {value}
        </li>
    );
}, (prevProps, nextProps) => {
    return (
        prevProps.type === nextProps.type &&
        prevProps.value === nextProps.value &&
        prevProps.html === nextProps.html &&
        prevProps.id === nextProps.id
    );
});

NotificationItem.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    html: undefined,
    markAsRead: () => { },
    id: 0,

};

export default NotificationItem;