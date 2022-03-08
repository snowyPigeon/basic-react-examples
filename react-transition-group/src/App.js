import React, { useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loading from "./components/Loading";
import Example from "./components/Example";
import Animation1 from "./components/Animation1";
import Spinner from "react-bootstrap/Spinner";
import CustomSpinner from "./components/CustomSpinner";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="App">
      <Loading setShowModal={setShowModal} />
      <Animation1 showModal={showModal} setShowModal={setShowModal} />
      <Example />
      <Spinner animation="border" variant="info" role="status" style={{display: "block", margin: "1rem auto" }}>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <p style={{textAlign: "center" }}>The first spinner is from the react-bootstrap library and uses the info variant to obtain its colour.</p>
      <p style={{textAlign: "center" }}>The second spinner is a custom component using an animated gif provided at <a href="https://code-boxx.com/full-screen-css-loading-spinner/">Code Boxx</a>.</p>
      <CustomSpinner><span className="visually-hidden">Loading...</span></CustomSpinner>
    </div>
  );
}

export default App;
