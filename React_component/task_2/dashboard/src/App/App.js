/* eslint-disable */
import './App.css';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import CourseList from '../CourseList/CourseList';
import React, { Component } from "react";
import PropTypes from 'prop-types';

class App extends Component {
  // Define propTypes for logOut function and other props
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    logOut: PropTypes.func,
  };

  // Provide a default value for logOut
  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    logOut: () => { },
  };

  // Handle keydown event for Control + h
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  // Add event listener when component mounts
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Remove event listener when component unmounts
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: listNotifications() } },
    ];

    return (
      <>
        <div className="App">
          <div className="App-head">
            <Header />
            <Notifications displayDrawer={displayDrawer} listNotifications={listNotifications} />
          </div>

          <div className="App-body border">
            {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
          </div>

          <div className="App-footer border">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default App;
