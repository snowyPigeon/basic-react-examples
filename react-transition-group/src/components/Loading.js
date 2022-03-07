import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function Loading({setShowModal}) {
  const [loading, setShowLoading] = useState(true);
  const [timedOut, setTimedOut] = useState(false);
  const lagSimulation = () => {
    setTimedOut(true);
  }

  return (
    <>
      <CSSTransition
        in={loading}
        appear={loading}
        timeout={1000}
        classNames="loading"
        unmountOnExit
        onEnter={() => lagSimulation()}
        onEntered={() => timedOut && setShowLoading(false)}
        onExited={() => setShowModal(true)}
      ><div className="loading"></div></CSSTransition>
    </>
  );
}

export default Loading;
