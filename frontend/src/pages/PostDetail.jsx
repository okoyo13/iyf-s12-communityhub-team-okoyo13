import "./PostDetail.css";
import { Link, useParams } from "react-router-dom";

function PostDetail({ posts, onLike, likedPostIds = [] }) {
  const { postId } = useParams();

  const post = posts.find((item) => String(item.id) === postId);

  if (!post) {
    return (
      <section className="post-detail">
        <h1>Post Not Found</h1>
        <p>Sorry, the post you are looking for does not exist.</p>
        <Link to="/posts">Back to Posts</Link>
      </section>
    );
  }

  const alreadyLiked = likedPostIds.includes(post.id);

  return (
    <article className="post-detail">
      <Link to="/posts">← Back to Posts</Link>

      <h1>{post.title}</h1>

      <p>{post.content}</p>

      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>

      <div className="post-actions">
        <span>
          {post.likes} {post.likes === 1 ? "Like" : "Likes"}
        </span>

        <button type="button" onClick={() => onLike(post.id)}>
          {alreadyLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </article>
  );
}

export default PostDetail;
