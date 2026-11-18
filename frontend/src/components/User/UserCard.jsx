function UserCard({ user }) {
  return (
    <article className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </article>
  );
}

export default UserCard;
