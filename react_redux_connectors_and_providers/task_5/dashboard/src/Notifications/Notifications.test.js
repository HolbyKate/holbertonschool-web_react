import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fromJS } from 'immutable';
import Notifications from './Notifications';
import { fetchNotifications } from '../actions/notificationActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<Notifications />', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      notifications: fromJS({
        notifications: {
          1: { id: 1, type: 'default', value: 'New course available' },
          2: { id: 2, type: 'urgent', value: 'New resume available' },
          3: { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong>' } },
        },
        loading: false,
      }),
    };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it('renders three NotificationItem components when passed notifications', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders one NotificationItem component when no notifications are passed', () => {
    const emptyState = {
      notifications: fromJS({
        notifications: {},
        loading: false,
      }),
    };
    const emptyStore = mockStore(emptyState);
    const wrapper = mount(
      <Provider store={emptyStore}>
        <Notifications />
      </Provider>
    );
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
    expect(wrapper.find('NotificationItem').prop('value')).toEqual('No new notification for now');
  });

  it('calls fetchNotifications when the component is mounted', () => {
    mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});