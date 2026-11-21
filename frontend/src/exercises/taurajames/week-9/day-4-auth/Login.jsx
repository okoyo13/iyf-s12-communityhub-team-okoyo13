import { useState } from "react";
import { useAuth } from "./useAuth";

function Login() {
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const success = login(username, password);

    if (!success) {
      setError("Invalid username or password.");
      return;
    }

    setError("");
  };

  return (
    <main>
      <h1>Login to CommunityHub</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>

        {error && <p role="alert">{error}</p>}
      </form>
    </main>
  );
}

export default Login;