 Wilfred-Mutuma/week-08-communityhub
function PostCard({ post }) {
  return (
    <article className="post-card">
      <h3>{post.title}</h3>

      <p>{post.content}</p>

      <small>Posted by {post.author}</small>

function PostCard({ title, excerpt, author, date }) {
  return (
    <article className="post-card">
      <h3>{title}</h3>
      <p>{excerpt}</p>

      <div className="post-meta">
        <span>By {author}</span>
        <span>{date}</span>
      </div>
    </article>
  );
}

export default PostCard;