import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Map, fromJS } from 'immutable';
import Notifications from './Notifications';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<Notifications />', () => {
  let store;
  let initialState;

  beforeEach(() => {
    initialState = {
      notifications: Map({
        1: Map({ id: 1, type: 'default', value: 'New course available', isRead: false }),
        2: Map({ id: 2, type: 'urgent', value: 'New resume available', isRead: false }),
        3: Map({ id: 3, type: 'urgent', html: fromJS({ __html: '<strong>Urgent requirement</strong>' }), isRead: false }),
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
      notifications: Map({}),
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

  it('calls markAsRead when a notification is clicked', () => {
    const wrapper = mount(
      <Provider store={store}>
        <Notifications />
      </Provider>
    );
    const firstNotification = wrapper.find('NotificationItem').first();
    firstNotification.simulate('click');
    expect(store.dispatch).toHaveBeenCalledWith(markAsRead(1));
  });
});