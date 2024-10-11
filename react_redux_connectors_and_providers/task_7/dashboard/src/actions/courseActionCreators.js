import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index
  };
};

export const boundSelectCourse = (dispatch) => {
  return bindActionCreators({ selectCourse }, dispatch);
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index
  };
};

export const boundUnSelectCourse = (dispatch) => {
  return bindActionCreators({ unSelectCourse }, dispatch);
};

export const setCourses = (courses) => {
  return {
    type: SET_COURSES,
    courses
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    return fetch('/courses.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dispatch(setCourses(data));
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };
};
export const fetchCoursesSuccess = (courses) => ({
    type: FETCH_COURSE_SUCCESS,
    courses
});