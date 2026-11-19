import { Routes, Route } from "react-router-dom";
import PostDetail from "./pages/PostDetail";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import DailyChallenges from "./daily-challenges/DailyChallenges";

function App() {
  return (
    <Routes>
      import DailyChallenges from "./daily-challenges/DailyChallenges";
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="posts/:postId" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default App;