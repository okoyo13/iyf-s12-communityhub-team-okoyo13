function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>

      <p>{post.content}</p>

      <small>Posted by {post.author}</small>
    </article>
  );
}

export default PostCard;