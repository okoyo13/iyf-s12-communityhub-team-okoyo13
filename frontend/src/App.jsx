import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./styles/Layout.css";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Welcome to CommunityHub",
      content: "This is our first community post.",
      author: "Alice",
      date: "November 18, 2026",
    },
    {
      id: 2,
      title: "Learning React Props",
      content: "Props help us create reusable user interfaces.",
      author: "Bob",
      date: "November 18, 2026",
    },
  ]);

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      ...newPost,
      date: new Date().toLocaleDateString(),
    };

    setPosts((currentPosts) => [post, ...currentPosts]);
  }

  return (
    <div className="app">
      <Header />

      <div className="app-layout">
        <Sidebar />

        <div className="app-main">
          <main className="main-content" id="home">
            <h1>Welcome to CommunityHub</h1>
            <p>Connect, share and interact with your community.</p>

            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />

            <div id="posts">
              <CreatePost onAddPost={handleAddPost} />
              <PostList posts={posts} />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
