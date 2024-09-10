/* eslint-disable */
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import React, { Component } from "react";
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import WithLogging from '../HOC/WithLogging';
import { StyleSheet, css } from 'aphrodite';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif',
  },
  appHeader: {
    backgroundColor: '#fff',
    minHeight: '20vh',
    display: 'flex',
    alignItems: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'rgb(233, 53, 53)',
    borderBottom: '5px solid rgb(233, 53, 53)',
  },
  appLogo: {
    height: '300px',
    width: 'auto',
    marginRight: '20px',
    objectFit: 'contain',
  },
  appBody: {
    padding: '20px',
    color: '#000',
    textAlign: 'left',
    fontSize: '24px',
    marginLeft: '50px',
    marginTop: '25px',
  },
  login: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'white',
    padding: '10px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  loginLabel: {
    fontSize: '18px',
  },
  loginInput: {
    padding: '2px',
    border: '1px solid lightgrey',
    borderRadius: '2px',
    flex: 1,
  },
  loginButton: {
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderRadius: '5px',
    padding: '2px 8px',
    cursor: 'pointer',
  },
  appFooter: {
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    textAlign: 'center',
    fontSize: '24px',
    fontStyle: 'italic',
    borderTop: '5px solid rgb(233, 53, 53)',
  },
  h1: {
    marginLeft: '50px',
    textAlign: 'left',
    color: 'rgb(233, 53, 53)',
    fontSize: '50px',
  },
});

// Create listCourses and App class
class App extends Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn, displayDrawer } = this.props;

    return (
      <>
        <Notifications displayDrawer={displayDrawer} />
        <div className={css(styles.app)}>
          <Header className={css(styles.appHeader)} />
        </div>
        <div className={css(styles.appBody)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login className={css(styles.login)} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p className={css(styles.h1)}>
              Cathy test with react
            </p>
          </BodySection>
        </div>
        <div className={css(styles.appFooter)}>
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => { },
};

// Wrapping App with WithLogging
export default WithLogging(App);
