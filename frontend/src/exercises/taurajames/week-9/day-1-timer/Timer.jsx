
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Start and stop the timer
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    // Cleanup: stop the interval
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  // Start the timer
  const handleStart = () => {
    setIsRunning(true);
  };

  // Stop the timer
  const handleStop = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Day 1: Timer</h1>

      <h2>{seconds} seconds</h2>

      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>

      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>

      <button onClick={handleReset}>
        Reset
      </button>

      <p>Status: {isRunning ? "Running" : "Stopped"}</p>
    </div>
  );
}

export default Timer;
