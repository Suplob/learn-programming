import React from "react";

const Teacher = ({ data }) => {
  const { name, img, goodAt } = data;
  return (
    <div>
      <div className="card mx-auto">
        <div className="card-header">
          <img src={img} alt="card img" />
        </div>
        <div className="card-body">
          <h4 className="font-bold mb-5 text-xl">{name}</h4>
          <p>Good At: {goodAt}</p>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
