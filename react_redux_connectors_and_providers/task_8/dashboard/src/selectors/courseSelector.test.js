import { Map, List } from 'immutable';
import { getCourseList } from './courseSelector';

describe('courseSelector', () => {
    it('should return a List of courses from the state', () => {
        const state = {
            courses: Map({
                1: Map({ id: 1, name: 'Course 1' }),
                2: Map({ id: 2, name: 'Course 2' }),
                3: Map({ id: 3, name: 'Course 3' }),
            })
        };

        const result = getCourseList(state);

        expect(List.isList(result)).toBe(true);
        expect(result.size).toBe(3);
        expect(result.getIn([0, 'name'])).toBe('Course 1');
        expect(result.getIn([1, 'name'])).toBe('Course 2');
        expect(result.getIn([2, 'name'])).toBe('Course 3');
    });

    it('should return an empty List if there are no courses', () => {
        const state = {
            courses: Map({})
        };

        const result = getCourseList(state);

        expect(List.isList(result)).toBe(true);
        expect(result.size).toBe(0);
    });
});