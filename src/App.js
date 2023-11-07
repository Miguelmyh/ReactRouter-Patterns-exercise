import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
// import DogList from "./DogList";
// import DogDetails from "./DogDetails";
// import FilterDog from "./FilterDog";
import { v4 as uuid } from "uuid";
import ListColors from "./ListColors";
import FilterColor from "./FilterColor";
import ColorForm from "./ColorForm";

function App(props) {
  const INITIAL_STATE = [
    {
      name: "red",
      value: "red",
      id: uuid(),
    },
    {
      name: "black",
      value: "black",
      id: uuid(),
    },
  ];
  const [colors, setColors] = useState(INITIAL_STATE);

  const addColor = (color) => {
    console.log("color", color);
    setColors((oldColors) => [...oldColors, { ...color, id: uuid() }]);
  };
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/dogs" element={<DogList dogs={props.dogs} />} />
        <Route path="/dogs/:name" element={<FilterDog dogs={props.dogs} />} /> 
        <Route path="*" element={<Navigate to={"/dogs"} />} />*/}
        <Route path="/colors" element={<ListColors colors={colors} />} />
        <Route
          path="/colors/:color"
          element={<FilterColor colors={colors} />}
        />
        <Route path="/colors/new" element={<ColorForm addColor={addColor} />} />
        <Route path="*" element={<Navigate to={"/colors"} />} />
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
