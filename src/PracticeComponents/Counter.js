import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleDec = () => {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  };
  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleDec}>DEC</button>
      <button onClick={handleInc}>INC</button>
    </div>
  );
};

export default Counter;
