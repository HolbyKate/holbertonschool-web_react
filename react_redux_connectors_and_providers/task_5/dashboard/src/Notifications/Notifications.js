import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

class Notifications extends Component {
  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const { notifications, markAsRead, loading } = this.props;

    return (
      <div className={css(styles.notificationsContainer)}>
        {loading ? (
          <p>Loading notifications...</p>
        ) : (
          <div className={css(styles.notifications)}>
            <button
              className={css(styles.closeButton)}
              aria-label="Close"
              onClick={this.props.handleHideDrawer}
            >
              <img className={css(styles.closeButtonImg)} src={closeIcon} alt="Close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {notifications.size > 0 ? (
                notifications.valueSeq().map(notification => (
                  <NotificationItem
                    key={notification.get('id')}
                    type={notification.get('type')}
                    value={notification.get('value')}
                    html={notification.get('html')}
                    markAsRead={() => markAsRead(notification.get('id'))}
                  />
                ))
              ) : (
                <NotificationItem type="default" value="No new notification for now" />
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

// ... styles remain the same

Notifications.propTypes = {
  notifications: PropTypes.object.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.get('notifications'),
  loading: state.notifications.get('loading'),
});

const mapDispatchToProps = {
  fetchNotifications,
  markAsRead,
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);