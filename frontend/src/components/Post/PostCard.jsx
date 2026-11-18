function PostCard({ title, excerpt, author, date, likes = 0, onLike }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>

      <div className="post-meta">
        <span>By {author}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </div>

      <div className="post-actions">
        <span>
          {likes} {likes === 1 ? "Like" : "Likes"}
        </span>
        <button type="button" onClick={onLike}>
          Like
        </button>
      </div>
    </article>
  );
}

export default PostCard;
