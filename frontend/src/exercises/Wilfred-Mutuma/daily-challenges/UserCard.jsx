function UserCard({ user }) {
  return (
    <article className="user-card">
      <h3>{user.name}</h3>
      {user.email && <p>{user.email}</p>}
    </article>
  );
}

export default UserCard;