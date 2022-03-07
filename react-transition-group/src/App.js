import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";
import Example from "./components/Example";
import Animation1 from "./components/Animation1";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Loading setShowModal={setShowModal} />
      <Animation1 showModal={showModal} setShowModal={setShowModal} />
      <Example />
    </div>
  );
}

export default App;
