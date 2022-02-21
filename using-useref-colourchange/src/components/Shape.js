import React from "react";
import { useRef } from "react";

function Shape() {
  const shape = useRef(null);
  const onClick = () => {
    if (shape.current.style.backgroundColor == "yellow") {shape.current.style.backgroundColor = "blue";} else {
      shape.current.style.backgroundColor = "yellow";
    }
    
  };
  return (
    <div
        className="shape"
        ref={shape}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "yellow",
          margin: "0.5%",
          display: "block",
        }}
        onClick={onClick}
      ></div>
  );
}

export default Shape;

