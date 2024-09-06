// Create notifications elements

import React, { Component } from "react";
import NotificationItem from './NotificationItem';
import closeIcon from "../assets/close-icon.png";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


//Import Aphrodite component

const styles = StyleSheet.create({
    menuItem: {
        textAlign: "right",
        marginBottom: "10px",
    },
    notifications: {
        border: "1px dashed rgb(233, 53, 53)",
        padding: "10px",
        margin: "10px 0",
        position: "relative",
        display: "block",
    },
    closeButton: {
        background: "transparent",
        border: "none",
        position: "absolute",
        right: 20,
        top: 5,
        cursor: "pointer",
    },
    closeIcon: {
        width: "10px",
    },
    notificationList: {
        margin: 0,
        padding: 0,
        listStyle: "none",
    },
    defaultItem: {
        color: "blue",
    },
    urgentItem: {
        color: "red",
    },
});
class Notifications extends Component {
    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.listNotifications.length > this.props.listNotifications.length;
    }


    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        const { displayDrawer, listNotifications } = this.props;
        return (
            <>
                <div className={css(styles.menuItem)}>
                    <p>Your notifications</p>
                </div>
                {displayDrawer && (
                    <div className={css(styles.notifications)}>
                        <button
                            style={{
                                background: "transparent",
                                border: "none",
                                position: "absolute",
                                right: 20,
                            }}
                            aria-label="close"
                        >
                            <img src={closeIcon} alt="close-icon" className={css(styles.closeIcon)} />
                        </button>
                        <p>Here is the list of notifications</p>
                        <ul className={css(styles.notificationList)}>
                            {listNotifications.length === 0 ? (
                                <NotificationItem type="default" value="No new notification for now" markAsRead={this.markAsRead} />
                            ) : (
                                listNotifications.map((notification) => (
                                    <NotificationItem
                                        key={notification.id}
                                        id={notification.id}
                                        type={notification.type}
                                        value={notification.value}
                                        html={notification.html}
                                        markAsRead={this.markAsRead}
                                    />
                                ))
                            )}
                        </ul>
                    </div>
                )}
            </>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};
export default Notifications;