import React, { useEffect, useRef, useState } from "react";
import styles from "./tooltip2.module.css";

const Tooltip2 = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 100);
  };

  
  let toolTipRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (toolTipRef.current) {
        if (!toolTipRef.current.contains(event.target)) {
          setActive(false);
        }
      }
    });
  });
  return (
    <div
      className={styles["Tooltip-Wrapper"]}
      // When to show the tooltip
      onMouseDown={showTip}
      
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <div ref={toolTipRef} className={`${styles["Tooltip-Tip"]} ${props.direction || "top"}`} style={{top:props.top}}>
          <div className={styles["bg"]}/>
          {/* Content */}
         <p> {props.content}</p>
       
        </div>
      )}
    </div>
  );
};

export default Tooltip2;
