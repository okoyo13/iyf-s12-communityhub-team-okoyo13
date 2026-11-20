
import { useEffect, useState } from "react";

function DebouncedSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSearchChange(event) {
    const nextQuery = event.target.value;

    setQuery(nextQuery);

    if (!nextQuery.trim()) {
      setUsers([]);
      setLoading(false);
      setError("");
    }
  }

  useEffect(() => {
    if (!query.trim()) return;

    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to fetch users.");
        }

        const data = await response.json();

        const results = data.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );

        setUsers(results);
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
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  return (
    <section>
      <h2>Debounced API Search</h2>
      <p>Search users by name. Results update after you stop typing.</p>

      <input
        type="search"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search users..."
        aria-label="Search users by name"
      />

      {loading && <p>Searching...</p>}
      {error && <p role="alert">{error}</p>}

      {!loading && query.trim() && users.length === 0 && !error && (
        <p>No matching users found.</p>
      )}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DebouncedSearch;
