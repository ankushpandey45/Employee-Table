import React, { useState, useEffect, useRef } from "react";

const PracCounter = () => {
  const [counter, setCounter] = useState(30);
  const [startCounter, setStartCounter] = useState(false);
  const interval = useRef;

  useEffect(() => {
    if (startCounter) {
      interval.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          } else {
            clearInterval(interval.current);
            return prevCounter;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
    return () => clearInterval(interval.current);
  }, [startCounter, interval]);

  const StartCounter = () => {
    setStartCounter(!startCounter);
  };

  const ResetCounter = () => {
    setCounter(30);
    setStartCounter(false);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={StartCounter}>{startCounter ? "Pause" : "Start"}</button>
      <button onClick={ResetCounter}>Reset</button>
    </div>
  );
};

export default PracCounter;
