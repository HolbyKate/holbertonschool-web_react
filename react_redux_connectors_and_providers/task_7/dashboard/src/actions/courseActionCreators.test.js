import { selectCourse, unSelectCourse, setCourses, fetchCourses } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE, SET_COURSES } from './courseActionTypes';
import fetchMock from 'jest-fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('courseActionCreators', () => {
  it('selectCourse should create an action to select a course', () => {
    const index = 1;
    const expectedAction = {
      type: SELECT_COURSE,
      index
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it('unSelectCourse should create an action to unselect a course', () => {
    const index = 1;
    const expectedAction = {
      type: UNSELECT_COURSE,
      index
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});

it('setCourses should create an action to set courses', () => {
  const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
  const expectedAction = {
    type: SET_COURSES,
    courses
  };
  expect(setCourses(courses)).toEqual(expectedAction);
});

describe('fetchCourses', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch courses and dispatch setCourses action', () => {
    const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
    fetchMock.mockResponseOnce(JSON.stringify(courses));

    const expectedActions = [
      { type: SET_COURSES, courses }
    ];

    const store = mockStore({ courses: [] });

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should handle errors when fetching courses', () => {
    fetchMock.mockRejectOnce(new Error('API error'));

    const store = mockStore({ courses: [] });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    return store.dispatch(fetchCourses()).then(() => {
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching courses:', expect.any(Error));
      consoleSpy.mockRestore();
    });
  });
});
