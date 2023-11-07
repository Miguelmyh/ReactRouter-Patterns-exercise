import React from "react";
import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import FilterDog from "./FilterDog";

function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
        <Route path="/dogs/:name" element={<FilterDog dogs={props.dogs} />} />
        <Route path="*" element={<Navigate to={"/dogs"} />} />
      </Routes>
    </div>
  );
}

export default App;

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs.",
      ],
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain.",
      ],
    },
  ],
};
