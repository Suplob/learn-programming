import React, { useContext } from "react";
import Card from "../Card/Card";
import { CoursesContext } from "../../../src/App";

const AllCourses = () => {
  const courses = useContext(CoursesContext);
  return (
    <>
      <h1 className="text-center font-bold text-4xl mt-20">All Courses</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-10 gap-4 ">
        {courses.map((data) => (
          <Card data={data} key={data.name}></Card>
        ))}
      </div>
    </>
  );
};

export default AllCourses;
