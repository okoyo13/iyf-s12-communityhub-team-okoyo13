import UserCard from "./UserCard";

function UserProfile({ user }) {
  if (!user) {
    return <p>User profile not available.</p>;
  }

  return (
    <section className="user-profile">
      <h2>User Profile</h2>
      <UserCard user={user} />
    </section>
  );
}

export default UserProfile;
