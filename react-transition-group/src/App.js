import React, { useState } from "react";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from "./components/Example";
import Animation1 from "./components/Animation1";

function App() {
  return (
    <div className="App">
      <Animation1 />
      <Example />
    </div>
  );
}

export default App;
