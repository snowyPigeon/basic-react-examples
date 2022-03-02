import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Button, Modal } from "react-bootstrap";
import Animation2 from "./Animation2";

function Animation1() {
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
    setShowAlert(true);
    setIsLoggedIn(true);
  };

  return (
    <>
      <CSSTransition
        in={showModal}
        appear={showModal}
        timeout={1000}
        classNames="login"
        unmountOnExit
        onExited={() => setShowModal(false)}
      >
        <Modal.Dialog>
          <Modal.Header>Animated alert message</Modal.Header>
          <Modal.Body>
            <Button variant="warning" onClick={() => handleModalClose()}>Click to log in.</Button>
          </Modal.Body>
        </Modal.Dialog>
      </CSSTransition>
      <Animation2 loggedIn={loggedIn} showAlert={showAlert} setShowAlert={setShowAlert}/>
    </>
  );
}

export default Animation1;
