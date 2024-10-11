import { createSelector } from 'reselect';

const getNotificationsState = (state) => state.notifications;
const getFilterState = (state) => state.filter;

export const getUnreadNotifications = createSelector(
    [getNotificationsState, getFilterState],
    (notificationsState) => {
        // Check if notificationsState is an Immutable Map
        if (notificationsState && notificationsState.get) {
            return notificationsState.get('notifications', []).filter(notification => !notification.get('isRead'));
        }
        // Fallback for non-Immutable state
        return [];
    }
);
