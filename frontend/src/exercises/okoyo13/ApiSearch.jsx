import { useState, useEffect } from "react";

function ApiSearch() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );

      setFilteredUsers(results);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm, users]);

  return (
    <div>
      <h2>API User Search</h2>

      <input
        type="text"
        placeholder="Search users by name..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApiSearch;
