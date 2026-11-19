function Greeting({ name = "Guest", timeOfDay = "morning" }) {
  let message;

  if (timeOfDay === "morning") {
    message = "Good morning";
  } else if (timeOfDay === "afternoon") {
    message = "Good afternoon";
  } else if (timeOfDay === "evening") {
    message = "Good evening";
  } else {
    message = "Hello";
  }

  return (
    <h2 className="greeting">
      {message}, {name}!
    </h2>
  );
}

export default Greeting;
