
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./exercises/Wilfred-Mutuma/pages/Posts";
import PostDetail from "./pages/PostDetail";
import CreatePostPage from "./exercises/Wilfred-Mutuma/pages/CreatePostPage";
import Week9Challenges from "./exercises/Wilfred-Mutuma/daily-challenges/Week9Challenges";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/posts"
        element={
          <Layout>
            <Posts />
          </Layout>
        }
      />

      <Route
        path="/posts/:postId"
        element={
          <Layout>
            <PostDetail />
          </Layout>
        }
      />

      <Route
        path="/create-post"
        element={
          <Layout>
            <CreatePostPage />
          </Layout>
        }
      />

      <Route
        path="/week-09-challenges"
        element={
          <Layout>
            <Week9Challenges />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout showSidebar={false}>
            <About />
          </Layout>
        }
      />

      <Route
        path="*"
        element={
          <Layout showSidebar={false}>
            <h1>404 - Page Not Found</h1>
            <a href="/">Return Home</a>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
