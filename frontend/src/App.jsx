feature/task-17.3-react-router

import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";


import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";

function App() {
feature/task-17.3-react-router

 const [posts, setPosts] = useLocalStorage("communityhub-posts", initialPosts);
 const [searchTerm, setSearchTerm] = useState("");
 const [likedPostIds, setLikedPostIds] = useState([]);

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: currentUser.name,
      date: new Date().toISOString(),
      likes: 0,
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
  }

  function handleLike(postId) {
    const alreadyLiked = likedPostIds.includes(postId);

    setPosts((previousPosts) =>
      previousPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes + (alreadyLiked ? -1 : 1),
            }
          : post,
      ),
    );

    setLikedPostIds((previousIds) =>
      alreadyLiked
        ? previousIds.filter((id) => id !== postId)
        : [...previousIds, postId],
    );
  }

  const filteredPosts = searchPosts(posts, searchTerm);
  const sortedPosts = sortNewestFirst(filteredPosts);


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <Layout showSidebar={false}>
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
