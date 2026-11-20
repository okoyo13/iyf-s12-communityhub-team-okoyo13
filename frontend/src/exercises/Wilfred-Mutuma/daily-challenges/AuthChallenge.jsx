
import { useState } from "react";

function AuthChallenge() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  function handleLogin() {
    setUsername("Wilfred Mutuma");
    setIsLoggedIn(true);
  }

  function handleLogout() {
    setUsername("");
    setIsLoggedIn(false);
  }

  return (
    <section>
      <h2>Authentication Challenge</h2>

      {!isLoggedIn ? (
        <div>
          <p>You must log in to view the protected content.</p>
          <button onClick={handleLogin}>Simulate Login</button>
        </div>
      ) : (
        <div>
          <p role="status">Welcome, {username}!</p>

          <div>
            <h3>Protected Content</h3>
            <p>
              This content is only visible when you are logged in.
            </p>
          </div>

          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </section>
  );
}

export default AuthChallenge;
