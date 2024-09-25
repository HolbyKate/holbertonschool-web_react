import * as data from '../notifications.json';

/**
 * Returns all notifications for a given userId.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Array} - List of notifications for the user.
 */
export const getAllNotificationsByUser = (userId) => {
    if (!userId) return [];

    return data.notifications.filter(
        (notification) => notification.author.id === userId
    );
};
