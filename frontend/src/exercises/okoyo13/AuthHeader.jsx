import { useAuth } from "./AuthContext";

function AuthHeader() {
  const { username, logout } = useAuth();

  return (
    <header>
      {username ? (
        <>
          <span>Welcome, {username}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>Not logged in</span>
      )}
    </header>
  );
}

export default AuthHeader;
