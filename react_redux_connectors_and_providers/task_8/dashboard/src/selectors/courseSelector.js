import { createSelector } from 'reselect';
import { List } from 'immutable';

// Assuming the courses are stored in state.courses
const getCourseEntities = (state) => state.courses;

export const getCourseList = createSelector(
    [getCourseEntities],
    (courses) => {
        return List(courses.valueSeq());
    }
);