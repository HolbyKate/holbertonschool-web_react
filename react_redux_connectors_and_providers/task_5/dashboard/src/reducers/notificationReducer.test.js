import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ, SET_LOADING_STATE } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = fromJS({
    notifications: {},
    filter: 'DEFAULT',
    loading: false,
  });

  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, value: 'Notification 1' }, { id: 2, value: 'Notification 2' }]
    };
    const expectedState = initialState.merge({
      notifications: {
        1: { id: 1, value: 'Notification 1', isRead: false },
        2: { id: 2, value: 'Notification 2', isRead: false }
      },
      loading: false,
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = initialState.set('filter', 'URGENT');
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const stateWithNotifications = initialState.setIn(['notifications', '1'], fromJS({ id: 1, value: 'Notification 1', isRead: false }));
    const action = { type: MARK_AS_READ, index: 1 };
    const expectedState = stateWithNotifications.setIn(['notifications', '1', 'isRead'], true);
    expect(notificationReducer(stateWithNotifications, action)).toEqual(expectedState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = { type: SET_LOADING_STATE, loading: true };
    const expectedState = initialState.set('loading', true);
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});