import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Container, Button, Alert } from "react-bootstrap";

function Example() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  return (
    <Container fluid style={{ paddingTop: "2rem" }}>
      {showButton && (
        <div className="d-grid gap-2"><Button onClick={() => setShowMessage(true)} size="lg" className="centralised">
        Show Message
      </Button></div>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert
          variant="primary"
          dismissible
          onClose={() => setShowMessage(false)}
        >
          <Alert.Heading>Animated alert message</Alert.Heading>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button onClick={() => setShowMessage(false)}>Close</Button>
        </Alert>
      </CSSTransition>
    </Container>
  );
}

export default Example;
