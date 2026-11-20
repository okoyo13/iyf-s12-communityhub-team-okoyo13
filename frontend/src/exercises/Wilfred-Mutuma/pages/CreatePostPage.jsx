
import { useState } from "react";
import CreatePost from "../../../components/Post/CreatePost";
import { useLocalStorage } from "../hooks/useLocalStorage";

function CreatePostPage() {
  const [posts, setPosts] = useLocalStorage("wilfred-community-posts", []);
  const [message, setMessage] = useState("");

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: "Wilfred Mutuma",
      date: new Date().toISOString(),
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
    setMessage("Your post was published successfully!");
  }

  return (
    <section>
      <h1>Create a Community Post</h1>
      <p>Share your thoughts and ideas with the community.</p>

      <CreatePost onAddPost={handleAddPost} />

      {message && <p role="status">{message}</p>}

      <h2>Your Saved Posts ({posts.length})</h2>

      {posts.length === 0 ? (
        <p>You have not published any posts yet.</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>By {post.author}</small>
          </article>
        ))
      )}
    </section>
  );
}

export default CreatePostPage;
