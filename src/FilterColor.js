import React from "react";
import { useParams, Navigate } from "react-router-dom";
import ColorDetails from "./ColorDetails";

const FilterColor = ({ colors }) => {
  const { color } = useParams();
  const currCol = colors.filter((col) => col.name === color);
  const toReturn = currCol ? (
    <div>
      <h1>Color Details</h1>
      <ul>
        <ColorDetails color={currCol} />
      </ul>
    </div>
  ) : (
    <Navigate to="/colors" />
  );
  return toReturn;
};

export default FilterColor;
