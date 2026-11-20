
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setSeconds((previousSeconds) => previousSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  function handleReset() {
    setIsRunning(false);
    setSeconds(0);
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <section className="timer-challenge">
      <h2>Timer Challenge</h2>

      <p aria-live="polite">
        {String(minutes).padStart(2, "0")}:
        {String(remainingSeconds).padStart(2, "0")}
      </p>

      <button onClick={() => setIsRunning(true)} disabled={isRunning}>
        Start
      </button>

      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
        Pause
      </button>

      <button onClick={handleReset}>
        Reset
      </button>
    </section>
  );
}

export default Timer;
