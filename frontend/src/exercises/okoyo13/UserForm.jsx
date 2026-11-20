
import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);

  return (
    <form>
      <div>
        <label htmlFor="user-name">Name</label>
        <input
          id="user-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label htmlFor="user-email">Email</label>
        <input
          id="user-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="user-age">Age</label>
        <input
          id="user-age"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Enter your age"
        />
      </div>
    </form>
  );
}

export default UserForm;
