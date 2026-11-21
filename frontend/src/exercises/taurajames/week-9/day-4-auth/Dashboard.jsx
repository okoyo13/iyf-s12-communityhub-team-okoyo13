import { useAuth } from "./useAuth";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <main>
      <h1>Welcome to CommunityHub!</h1>

      <p>You are logged in as {user.username}.</p>

      <p>This is your protected dashboard.</p>

      <button onClick={logout}>Logout</button>
    </main>
  );
}

export default Dashboard;