
import "./PostDetail.css";
import { Link, useParams } from "react-router-dom";

import { useFetch } from "../exercises/Wilfred-Mutuma/hooks/useFetch";
import LoadingSpinner from "../exercises/Wilfred-Mutuma/components/shared/LoadingSpinner";
import ErrorMessage from "../exercises/Wilfred-Mutuma/components/shared/ErrorMessage";

function PostDetail() {
  const { postId } = useParams();

  const {
    data: post,
    loading,
    error,
    refetch,
  } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) {
    return <LoadingSpinner text="Loading post details..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  if (!post || !post.id) {
    return (
      <section className="post-detail">
        <h1>Post Not Found</h1>
        <p>The requested post could not be found.</p>
        <Link to="/posts">Back to Posts</Link>
      </section>
    );
  }

  return (
    <article className="post-detail">
      <Link to="/posts">Back to Posts</Link>

      <h1>{post.title}</h1>

      <p>{post.body}</p>

      <small>Post ID: {post.id}</small>

      <p>User ID: {post.userId}</p>
    </article>
  );
}

export default PostDetail;
