function Greeting({ name = "Guest", timeOfDay = "morning" }) {
  const greetings = {
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
  };

  const message = greetings[timeOfDay] || "Hello";

  return (
    <h2>
      {message}, {name}!
    </h2>
  );
}

export default Greeting;