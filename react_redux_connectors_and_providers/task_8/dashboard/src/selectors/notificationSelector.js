import { createSelector } from 'reselect';

const getNotificationsState = (state) => state.notifications;
const getFilterState = (state) => state.filter;

export const getUnreadNotificationsByType = createSelector(
    [getNotificationsState, getFilterState],
    (notificationsState, filterState) => {
        // Check if notificationsState is an Immutable Map
        if (notificationsState && notificationsState.get) {
            const notifications = notificationsState.get('notifications', []);
            const filterType = filterState.get('type', 'default');

            return notifications.filter(notification => {
                const isUnread = !notification.get('isRead');

                if (filterType === 'default') {
                    return isUnread;
                } else if (filterType === 'urgent') {
                    return isUnread && notification.get('isUrgent');
                }

                return false; // For any other filter type, return no notifications
            });
        }

        // Fallback for non-Immutable state
        return [];
    }
);
