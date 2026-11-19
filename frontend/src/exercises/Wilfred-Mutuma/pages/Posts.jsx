
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ErrorMessage from "../components/shared/ErrorMessage";

function Posts() {
  const {
    data: posts,
    loading,
    error,
    refetch,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <LoadingSpinner text="Loading posts..." />;
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refetch} />;
  }

  if (!posts.length) {
    return <p>No posts found.</p>;
  }

  return (
    <div>
      <h2>Latest Posts</h2>

      {posts.slice(0, 10).map((post) => (
        <article key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>
        </article>
      ))}
    </div>
  );
}

export default Posts;
