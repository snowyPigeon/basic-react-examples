import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Alert, Button, Container } from "react-bootstrap";

function Animation2({ loggedIn, showAlert, setShowAlert }) {
  const [message, setMessage] = useState("");
  const handleAlertClose = () => {
    setMessage("Well done, you logged in.");
    setShowAlert(false);
  };

  return (
    <>
      <CSSTransition
        in={showAlert}
        appear={showAlert}
        timeout={1000}
        classNames="alert"
        unmountOnExit
        onExited={() => setShowAlert(false)}
      >
        <Alert variant="success">
          <Alert.Heading>Alert</Alert.Heading>
          <p>Thank you for logging in!</p>
          <Button variant="success" onClick={() => handleAlertClose()}>Dismiss</Button>
        </Alert>
      </CSSTransition>
      {loggedIn && <Container><p style={{backgroundColor: "yellow"}}>{message}</p></Container>}
    </>
  );
}

export default Animation2;
