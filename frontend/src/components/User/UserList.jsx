import UserCard from "./UserCard";

function UserList({ users = [] }) {
  if (users.length === 0) {
    return <p>No users available.</p>;
  }

  return (
    <section className="user-list">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </section>
  );
}

export default UserList;
