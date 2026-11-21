import { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("profile");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user profile.");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading user profile...</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  if (!user) return <p>No user information found.</p>;

  return (
    <main>
      <h1>Day 5: User Profile</h1>
      <h2>{user.name}</h2>
      <p>@{user.username}</p>

      <div role="tablist" aria-label="User profile information">
        <button
          role="tab"
          aria-selected={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>

        <button
          role="tab"
          aria-selected={activeTab === "contact"}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </div>

      <section role="tabpanel">
        {activeTab === "profile" && (
          <div>
            <h3>Profile Information</h3>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h3>Contact Information</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>City: {user.address.city}</p>
          </div>
        )}
      </section>
    </main>
  );
}

export default UserProfile;
