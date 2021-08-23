import React from "react";
import "../assets/css/topHeading.css";

export default function TopHeading({headBack, headFront, span = false}) {
  return (
    <div className="heading">
      <div className="wrapper-heading-about">
        <h1>{headBack}</h1>
        <h1>
          {headFront} {span && <span>{span}</span>}
        </h1>
      </div>
    </div>
  );
}
