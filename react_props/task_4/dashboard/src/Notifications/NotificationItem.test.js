// NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

describe('NotificationItem Component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders correct HTML with type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.prop('data-priority')).toEqual('default');
        expect(wrapper.text()).toEqual('test');
    });

    it('renders correct HTML with html prop', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem type="default" html={html} />);
        expect(wrapper.prop('dangerouslySetInnerHTML')).toEqual(html);
    });
});