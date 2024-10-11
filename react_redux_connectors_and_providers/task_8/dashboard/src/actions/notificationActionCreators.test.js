import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import { SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('notification action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates SET_LOADING_STATE when setLoadingState is called', () => {
    const expectedAction = { type: SET_LOADING_STATE, loading: true };
    expect(setLoadingState(true)).toEqual(expectedAction);
  });

  it('creates FETCH_NOTIFICATIONS_SUCCESS when setNotifications is called', () => {
    const notifications = [{ id: 1, type: 'default', value: 'New course available' }];
    const expectedAction = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });

  it('creates SET_LOADING_STATE and FETCH_NOTIFICATIONS_SUCCESS when fetchNotifications is called', () => {
    const notifications = [{ id: 1, type: 'default', value: 'New course available' }];
    fetchMock.getOnce('/notifications.json', {
      body: notifications,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      { type: SET_LOADING_STATE, loading: true },
      { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications },
      { type: SET_LOADING_STATE, loading: false },
    ];

    const store = mockStore({});

    return store.dispatch(fetchNotifications()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});