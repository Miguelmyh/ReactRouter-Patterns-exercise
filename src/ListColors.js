import React from "react";
import { Link } from "react-router-dom";
import "./ListColors.css";

const ListColors = ({ colors }) => {
  return (
    <div className="ListColors">
      <Link to={"/colors/new"}>
        <h2>Add new color</h2>
      </Link>
      <h4>Select color:</h4>
      <ul className="ListColors-ul">
        {colors.map((color) => (
          <Link key={color.id} to={`/colors/${color.name}`}>
            {color.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ListColors;
