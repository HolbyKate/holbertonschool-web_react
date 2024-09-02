/* eslint-disable */
import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn, displayDrawer}) {
  return (
    <>
      <Notifications displayDrawer={displayDrawer} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn === false ? <CourseList /> : <Login />}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};


export default App;
