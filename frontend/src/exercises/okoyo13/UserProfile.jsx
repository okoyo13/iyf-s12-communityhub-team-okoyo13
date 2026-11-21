import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("profile");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchProfileData() {
      try {
        setIsLoading(true);
        setError("");

        const [userResponse, postsResponse, todosResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users/1"),
          fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
          fetch("https://jsonplaceholder.typicode.com/todos?userId=1"),
        ]);

        if (!userResponse.ok || !postsResponse.ok || !todosResponse.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const userData = await userResponse.json();
        const postsData = await postsResponse.json();
        const todosData = await todosResponse.json();

        setUser(userData);
        setPosts(postsData);
        setTodos(todosData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfileData();
  }, []);
  if (isLoading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Profile</h1>

      <div role="tablist">
        <button
          role="tab"
          aria-selected={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>

        <button
          role="tab"
          aria-selected={activeTab === "posts"}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>

        <button
          role="tab"
          aria-selected={activeTab === "todos"}
          onClick={() => setActiveTab("todos")}
        >
          Todos
        </button>
      </div>
      <div role="tabpanel">
        {activeTab === "profile" && (
          <div>
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Company: {user.company.name}</p>
          </div>
        )}
        {activeTab === "posts" && (
          <div>
            <h2>User Posts</h2>

            {posts.map((post) => (
              <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        )}
        {activeTab === "todos" && (
          <div>
            <h2>User Todos</h2>

            {todos.map((todo) => (
              <div key={todo.id}>
                <p>
                  {todo.title} - {todo.completed ? "Completed" : "Pending"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
