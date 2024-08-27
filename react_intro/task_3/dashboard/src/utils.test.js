/* eslint-disable */
// Import the necessary functions from your utils file
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils tests', () => {
    // Test for getFullYear
    it('should return the current year', () => {
        const year = new Date().getFullYear();
        expect(getFullYear()).toBe(year);
    });

    // Test for getFooterCopy
    it('should return the correct footer string when isIndex is true', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('should return the correct footer string when isIndex is false', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });

    // Test for getLatestNotification
    it('should return the correct notification string', () => {
        expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
    });
});