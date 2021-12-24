import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound/NotFound";
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";

export const CoursesContext = createContext("All courses");

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/Suplob/education-json/main/courses.json"
      )
      .then((res) => {
        setCourses(res.data);
      });
  }, [courses]);

  return (
    <CoursesContext.Provider value={courses}>
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route exact path="/courses">
              <Courses></Courses>
            </Route>
            <Route exact path="/teachers">
              <Teachers></Teachers>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </CoursesContext.Provider>
  );
}

export default App;
