import React from "react";
import { useLoaderData, Navigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const DogDetails = ({ dog }) => {
  console.log(dog);
  return (
    <>
      <li>{dog[0].name}</li>
      <li>{dog[0].age}</li>
      <li>
        Facts:
        <ul>
          {dog[0].facts.map((fact) => (
            <li key={uuid()}>{fact}</li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default DogDetails;
