import React from "react";
import FeaturedCourses from "../Components/FeaturedCourses/FeaturedCourses";
import Header from "../Components/Header/Header";
import StudentsApplied from "../Components/StudentsApplied/StudentsApplied";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-40 ">
        <FeaturedCourses></FeaturedCourses>
        <StudentsApplied></StudentsApplied>
      </div>
    </div>
  );
};

export default Home;
