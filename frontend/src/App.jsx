
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: "Community Member",
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
  }

  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-main">
        <Header />

        <main className="main-content" id="home">
          <h1>Welcome to CommunityHub</h1>

          <p>
            Connect, share and interact with your community.
          </p>

          <section id="posts">
            <CreatePost onAddPost={handleAddPost} />
            <PostList posts={posts} />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
