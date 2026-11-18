import { useState } from "react";
import Stats from "./Stats";
import PostList from "./PostList";

function LiftingStateUp() {
  const [posts, setPosts] = useState([
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

      <PostList posts={posts} onLike={handleLike} />
    </div>
  );
}

export default LiftingStateUp;
