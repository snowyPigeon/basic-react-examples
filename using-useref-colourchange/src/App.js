import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Shape from './components/Shape';

function App() {
  return (
    <div className="App">
      <h1>Change the colour of a shape by clicking on it.</h1>
      <Shape />
      <Shape />
      <Shape />
    </div>
  );
}

export default App;
