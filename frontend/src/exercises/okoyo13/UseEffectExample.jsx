import { useState, useEffect } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [showTimer, setShowTimer] = useState(true);

  // Runs after every render
  useEffect(() => {
    console.log("Effect ran! Count is:", count);
  });

  useEffect(() => {
    console.log("Component mounted!");
  }, []);

  // Runs when count changes
  useEffect(() => {
    if (!showTimer) {
      return;
    }

    const interval = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleaned up!");
    };
  }, [showTimer]);

  return (
    <div>
      <h2>useEffect Practice</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
}

export default UseEffectExample;
