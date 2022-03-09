import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function Loading({setShowModal}) {
  const [loading, setShowLoading] = useState(true);
  const [timedOut, setTimedOut] = useState(false);
  const lagSimulation = () => {
    setTimedOut(true);
  }

  return (
    <Container fluid>
      <CSSTransition
        in={loading}
        appear={loading}
        timeout={500}
        classNames="loading"
        unmountOnExit
        onEnter={() => lagSimulation()}
        onEntered={() => timedOut && setShowLoading(false)}
        onExited={() => setShowModal(true)}
      ><div className="loading centralised"><p style={{position: "relative", top: "70px"}}>Loading...</p></div></CSSTransition>
    </Container>
  );
}

export default Loading;
