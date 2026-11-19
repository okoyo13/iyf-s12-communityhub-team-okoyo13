
function PostCard({ post, title, excerpt, author, date }) {
  const postTitle = title ?? post?.title;
  const postContent = excerpt ?? post?.content;
  const postAuthor = author ?? post?.author;
  const postDate = date ?? post?.date;

  return (
    <article className="post-card">
      <h3>{postTitle}</h3>
      <p>{postContent}</p>

      <div className="post-meta">
        <span>By {postAuthor}</span>
        <span>{postDate || "Date unavailable"}</span>
      </div>
    </article>
  );
}

export default PostCard;
