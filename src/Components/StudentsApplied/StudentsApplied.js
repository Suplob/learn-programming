import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const StudentsApplied = () => {
  return (
    <div className="self-center" data-aos="fade" data-aos-duration="4000">
      <h1 className="text-3xl font-semibold">LOTS OF HAPPY STUDENTS</h1>
      <p className="text-gray-500 my-5">WE HAVE OVER 1K STUDENTS</p>
      <Link to="/courses">
        <button className="custom-btn">Buy Our Course</button>
      </Link>
    </div>
  );
};

export default StudentsApplied;
