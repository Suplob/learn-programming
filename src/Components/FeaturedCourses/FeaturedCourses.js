import React, { useContext } from "react";
import "./FeaturedCourses.css";
import Card from "../Card/Card";
import { CoursesContext } from "../../App";

const FeaturedCourses = () => {
  const courses = useContext(CoursesContext);

  return (
    <div
      className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ml-12"
      data-aos="fade"
      data-aos-duration="4000"
    >
      {courses.splice(0, 4).map((data) => (
        <Card data={data} key={data.name}></Card>
      ))}
    </div>
  );
};

export default FeaturedCourses;
