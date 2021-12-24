import React from "react";
import "./Header.css";
import img from "../../../src/media/img/hero-img.png";

const Header = () => {
  return (
    <div className="container mx-auto  mt-40 w-75 grid grid-cols-1 md:grid-cols-2">
      <div className="w-50 self-center" data-aos="fade-right">
        <h1 className="text-5xl font-medium">
          Learn <span style={{ color: "#6C63FF" }}>Programming</span>
        </h1>
      </div>
      <div className="w-50 self-centers" data-aos="fade-left">
        <img src={img} className="w-100" alt="hero-img" />
      </div>
    </div>
  );
};

export default Header;
