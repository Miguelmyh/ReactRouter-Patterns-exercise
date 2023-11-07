import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const DogList = ({ dogs }) => {
  return (
    <div className="DogList">
      {!dogs && <Navigate to={"/dogs"} />}
      <h1>Dogs</h1>
      <ul>
        {dogs.map((dog) => (
          <li key={uuid()} className="DogList-li">
            <Link to={`/dogs/${dog.name}`} className="DogList-li-name">
              {dog.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DogList;
