import * as data from '../notifications.json';
import { normalize, schema } from 'normalizr';

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
    const user = new schema.Entity('users');
    const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

    const notification = new schema.Entity(
        'notifications',
        {
            author: user,
            context: message,
        },
        { idAttribute: 'id' }
    );

    // Normalize the notifications data
    const normalizedData = normalize(data.notifications, [notification]);

    export { user, message, notification, normalizedData };
