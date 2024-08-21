// Import the necessary functions from your utils file
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utility Functions', () => {
    // Test for getFullYear
    test('getFullYear should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });

    // Test for getFooterCopy
    test('getFooterCopy should return the correct string based on the argument', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    // Test for getLatestNotification
    test('getLatestNotification should return the expected notification string', () => {
        const expectedNotification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(expectedNotification);
    });
});