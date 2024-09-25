import { getAllNotificationsByUser } from './notifications';
import * as data from '../notifications.json';

describe('getAllNotificationsByUser', () => {
    it('returns the correct notifications for user id 5debd764a7c57c7839d722e9', () => {
        const userId = '5debd764a7c57c7839d722e9';
        const expectedNotifications = [
            {
                guid: "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
                isRead: true,
                type: "urgent",
                value:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                author: {
                    id: "5debd764a7c57c7839d722e9",
                    name: "John Doe"
                }
            },
            {
                guid: "280913fe-38dd-4abd-8ab6-acdb4105f922",
                isRead: false,
                type: "urgent",
                value:
                    "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed",
                author: {
                    id: "5debd764a7c57c7839d722e9",
                    name: "John Doe"
                }
            }
        ];

        const result = getAllNotificationsByUser(userId);

        expect(result).toEqual(expect.arrayContaining(expectedNotifications));
        expect(result.length).toBe(expectedNotifications.length);
    });

    it('returns an empty array if userId does not match any notifications', () => {
        const userId = 'non-existent-id';
        const result = getAllNotificationsByUser(userId);
        expect(result).toEqual([]);
    });

    it('returns an empty array if userId is not provided', () => {
        const result = getAllNotificationsByUser();
        expect(result).toEqual([]);
    });
});