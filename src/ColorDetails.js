import React from "react";
import "./ColorDetails.css";
import { useNavigate, Navigate, Link } from "react-router-dom";

const ColorDetails = ({ color }) => {
  console.log(color);
  const navigate = useNavigate();
  if (color.length < 1) return <Navigate to={"/colors"} />;
  return (
    <>
      <li>{color[0].name}</li>
      <ul className="ColorDetails-container">
        <li>color:</li>
        <div
          className="ColorDetails-color"
          style={{ backgroundColor: `${color[0].value}` }}>
          {" "}
        </div>
      </ul>
      <button onClick={() => navigate(-1)}> Go back</button>
    </>
  );
};

export default ColorDetails;
