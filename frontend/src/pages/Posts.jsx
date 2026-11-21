import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Posts.css";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const { data, loading, error } = useFetch(POSTS_URL);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = (data || []).filter((post) => {
    const search = searchTerm.toLowerCase();

    return (
      post.title.toLowerCase().includes(search) ||
      post.body.toLowerCase().includes(search)
    );
  });

  if (loading) {
    return (
      <main className="posts-page">
        <h1>Community Posts</h1>
        <p className="posts-message" role="status">
          Loading posts...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="posts-page">
        <h1>Community Posts</h1>
        <p className="posts-message" role="alert">
          Unable to load posts: {error}
        </p>
      </main>
    );
  }

  return (
    <main className="posts-page">
      <h1>Community Posts</h1>

      <p className="posts-intro">
        Explore what members of the community are sharing.
      </p>

      <label htmlFor="post-search">Search posts</label>

      <input
        className="posts-search"
        id="post-search"
        type="search"
        placeholder="Search by title or content..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <p className="posts-count" aria-live="polite">
        Showing {filteredPosts.length} posts
      </p>

      <section className="posts-results" aria-label="Community posts">
        {filteredPosts.length === 0 ? (
          <p>No posts match your search.</p>
        ) : (
          filteredPosts.map((post) => (
            <article className="api-post-card" key={post.id}>
              <h2>
  <Link to={`/posts/${post.id}`}>{post.title}</Link>
</h2>
              <p>{post.body}</p>
              <p className="api-post-meta">Post ID: {post.id}</p>
              <p className="api-post-meta">Author ID: {post.userId}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}

export default Posts;
