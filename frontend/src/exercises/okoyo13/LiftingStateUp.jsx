import { useState } from "react";
import Stats from "./Stats";
import PostList from "./PostList";

function LiftingStateUp() {
  const [posts, setPosts] = useState([
<<<<<<< HEAD
    {
      id: 1,
      title: "First Post",
      likes: 0,
    },
    {
      id: 2,
      title: "Second Post",
      likes: 0,
    },
  ]);

  function handleLike(postId) {
    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  }

  const totalLikes = posts.reduce((total, post) => total + post.likes, 0);

  return (
    <div>
      <h2>Lifting State Up</h2>

      <Stats totalPosts={posts.length} totalLikes={totalLikes} />

=======
    { id: 1, title: "First Post", likes: 0 },
    { id: 2, title: "Second Post", likes: 0 },
  ]);

  const handleLike = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post,
      ),
    );
  };

  const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

  return (
    <div>
      <Stats totalPosts={posts.length} totalLikes={totalLikes} />
>>>>>>> origin/main
      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

export default LiftingStateUp;
