
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";

function PostDetail() {
  const { postId } = useParams();

  const {
    data: post,
    loading,
    error,
    refetch,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  if (loading) {
    return <LoadingSpinner text="Loading post..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  if (!post || !post.id) {
    return <p>Post not found.</p>;
  }

  return (
    <article>
      <Link to="/posts">← Back to Posts</Link>

      <h2>{post.title}</h2>

      <p>{post.body}</p>
    </article>
  );
}

export default PostDetail;
