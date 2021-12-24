import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../src/media/img/not-found.png";
import "./style.css";

const NotFound = () => {
  return (
    <div className="mb-20 mt-10">
      <img src={notFound} style={{ width: "70%", margin: "0 auto" }} />

      <Link to="/home">
        <button className="custom-btn" role="button">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
