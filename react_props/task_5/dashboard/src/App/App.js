/* eslint-disable */
import React from "react";
import "./App.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn, displayDrawer }) {
  //Create listCourses
  const listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];
  return (
    <>
      <Notifications displayDrawer={displayDrawer} />
      <div className="App">
        <Header />
      </div>
      <div className="App-body">
        {isLoggedIn === false ? <CourseList listCourses={listCourses} /> : <Login />}
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
