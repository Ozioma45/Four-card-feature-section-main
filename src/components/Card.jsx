import React from "react";

export default function Card({ title, description, image, name }) {
  return (
    <div className="card" id={name}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} className={title} />
    </div>
  );
}
