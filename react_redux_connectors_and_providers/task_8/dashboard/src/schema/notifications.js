import notificationsData from '../notifications.json';
import { normalize, schema } from 'normalizr';


// Define the schemas
const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

export function getAllNotificationsByUser(userId) {
  const normalizedData = normalize(notificationsData, [notification]);
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const notifUser = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      notifUser.push(messages[notifications[key].context]);
    }
  }
  return notifUser;
}

export function notificationsNormalizer(data) {
  return normalize(data, [notification]);
}

// Export the normalized data
export const normalizedData = normalize(notificationsData, [notification]);