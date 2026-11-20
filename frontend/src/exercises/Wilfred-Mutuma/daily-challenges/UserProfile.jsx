
import { useEffect, useState } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUser() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Unable to load user profile.");
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

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p role="alert">{error}</p>;
  }

  if (!user) {
    return <p>User profile not found.</p>;
  }

  return (
    <section>
      <h2>User Profile Challenge</h2>

      <article>
        <h3>{user.name}</h3>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>

        <h4>Address</h4>
        <p>
          {user.address.street}, {user.address.suite},
          {" "}{user.address.city}, {user.address.zipcode}
        </p>

        <h4>Company</h4>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
      </article>
    </section>
  );
}

export default UserProfile;
