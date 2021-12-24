import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, img, content, price } = data;
  return (
    <div className="card mx-auto">
      <div className="card-header">
        <img src={img} alt="card img" />
      </div>
      <div className="card-body">
        <h4 className="font-bold mb-5 text-xl">{name}</h4>
        <p style={{ fontSize: "20px", marginBottom: "10px", fontWeight: 500 }}>
          ${price}
        </p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
