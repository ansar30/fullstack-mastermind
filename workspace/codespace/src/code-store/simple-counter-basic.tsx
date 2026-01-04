import { useEffect, useState } from "react";

const SimpleCounter = () => {
  const [counter, setCounter] = useState(0);
  const [isCounterRunning, setIsCounterRunning] = useState(false);

  const handleSubCLick = () => {
    setCounter((prev) => prev - 1);
  };

  const handleAddClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleAutoStart = () => {
    setIsCounterRunning(true);
  };

  const handleReset = () => {
    setCounter(0);
    setIsCounterRunning(false);
    clearInterval(counter);
  };

  useEffect(() => {
    let interval: any;
    if (isCounterRunning) {
      interval = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCounterRunning]);

  return (
    <>
      <div>Counter test : {counter}</div>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleSubCLick}>Sub</button>
      <button onClick={handleAutoStart}>Auto start</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};
export default SimpleCounter;