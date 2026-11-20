
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

  if (!posts || posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <section>
      <h1>Latest Community Posts</h1>

      {posts.slice(0, 10).map((post) => (
        <article key={post.id} className="post-card">
          <h2>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </h2>

          <p>{post.body}</p>

          <Link to={`/posts/${post.id}`}>
            Read Full Post
          </Link>
        </article>
      ))}
    </section>
  );
}

export default Posts;
