import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";

const FilterDog = ({ dogs }) => {
  const { name } = useParams();
  const currDog = dogs.filter((dog) => dog.name === name);
  const toReturn = currDog ? (
    <ul>
      <DogDetails dog={currDog} />
    </ul>
  ) : (
    <Navigate to="/dogs" />
  );
  return toReturn;
};

export default FilterDog;
