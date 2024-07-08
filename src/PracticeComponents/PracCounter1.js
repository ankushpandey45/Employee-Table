import React, { useState, useEffect, useRef } from "react";

const PracCounter1 = () => {
  const [counter, setCounter] = useState(25);
  const [startCounter, setStartCounter] = useState(false);
  const interval = useRef;
  useEffect(() => {
    if (startCounter) {
      interval.current = setInterval(() => {
        if (counter > 0) {
          setCounter(counter - 1);
        } else {
          clearInterval(interval.current);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [startCounter, interval, counter]);
  const StartCounter = () => {
    setStartCounter(!startCounter);
  };
  const ResetCounter = () => {
    setCounter(25);
    setStartCounter(false);
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={StartCounter}>{startCounter ? "pause" : "start"}</button>
      <button onClick={ResetCounter}>Reset</button>
    </div>
  );
};

export default PracCounter1;
