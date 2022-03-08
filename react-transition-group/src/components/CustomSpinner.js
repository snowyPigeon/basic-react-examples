import React, { useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import ajaxLoader from "./ajax-loader.gif";

function CustomSpinner() {
  const [show, setShow] = useState(false);
  const handleFullScreenSpinner = () => {
      setShow(true);
      setTimeout(setShow, 2000, false);
  }
  return (
    <Container fluid>
      <Button
      style={{display: "block", margin: "1rem auto" }}
        onClick={() => {
          handleFullScreenSpinner();
        }}
      >
        Invoke Custom Spinner
      </Button>
      <div className={show ? "custom-spinner custom-spinner-show" : "custom-spinner"}>
        <img className="spinner-img" src={ajaxLoader} alt="Loading graphic"/>
      </div>
    </Container>
  );
}

export default CustomSpinner;
