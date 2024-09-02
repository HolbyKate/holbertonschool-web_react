// Testing well working notifications

import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';


describe("<Notifications />", () => {
    it("Notifications renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toEqual(true);
    });

    it("Notifications renders Notification Item and first item has correct html", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toBeDefined();
        expect(listItems.first().html()).toEqual(
            '<li data-notification-type="default">New course available</li>'
        );
    });

    it("menu item is being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });

    it("div.Notifications is not being displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(0);
    });

    it("menu item is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.menuItem");
        expect(item).toHaveLength(1);
    });

    it("div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        wrapper.update();
        const item = wrapper.find("div.Notifications");
        expect(item).toHaveLength(1);
    });

    // New test: Notifications renders correctly with an empty array or without listNotifications property
    it("Notifications renders correctly with an empty array or without listNotifications property", () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        wrapper.update();
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems).toHaveLength(1);
        expect(notificationItems.at(0).props().value).toEqual("No new notification for now");
    });

    // New test: Notifications renders correctly with a list of notifications
    it("Notifications renders correctly with a list of notifications", () => {
        const notifications = [
            { id: 1, type: "default", value: "New course available" },
            { id: 2, type: "urgent", value: "New resume available" },
            { id: 3, type: "urgent", html: { __html: "Urgent requirement" } },
        ];
        const wrapper = shallow(<Notifications displayDrawer listNotifications={notifications} />);
        wrapper.update();
        const notificationItems = wrapper.find(NotificationItem);
        expect(notificationItems).toHaveLength(notifications.length);
        expect(notificationItems.at(0).props().value).toEqual("New course available");
        expect(notificationItems.at(1).props().value).toEqual("New resume available");
        expect(notificationItems.at(2).props().html).toEqual({ __html: "Urgent requirement" });
    });

    // New test: When listNotifications is empty, "Here is the list of notifications" is not displayed
    it('displays "No new notification for now" when listNotifications is empty', () => {
        const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
        wrapper.update();
        const notificationsDiv = wrapper.find("div.Notifications p").at(0);
        expect(notificationsDiv.text()).not.toEqual("Here is the list of notifications");
        expect(notificationsDiv.text()).toEqual("No new notification for now");
    });
});