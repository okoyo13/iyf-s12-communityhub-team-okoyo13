
import { useState, useEffect } from "react";

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;

    setSearchTerm(value);
    setError(null);
    setPosts([]);

    setLoading(Boolean(value.trim()));
  };

  useEffect(() => {
    if (!searchTerm.trim()) return;

    const controller = new AbortController();

    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?q=${encodeURIComponent(searchTerm)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();

        if (!controller.signal.aborted) {
          setPosts(data);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [searchTerm]);

  return (
    <div>
      <h1>Day 2: Debounced API Search</h1>

      <label htmlFor="search">Search posts:</label>

      <input
        id="search"
        type="search"
        placeholder="Type to search posts..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {loading && <p>Loading posts...</p>}

      {error && <p role="alert">Error: {error}</p>}

      {!loading && !error && searchTerm.trim() && posts.length === 0 && (
        <p>No matching posts found.</p>
      )}

      {!loading && posts.length > 0 && (
        <section>
          <h2>Search Results</h2>

          {posts.map((post) => (
            <article key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

export default DebouncedSearch;
