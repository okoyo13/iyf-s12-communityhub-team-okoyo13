feature/task-15.3-props
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import PostList from "./components/PostList";
import Button from "./components/Button";
import "./styles/Layout.css";

const samplePosts = [
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
    content: "Props help us create reusable components.",
    author: "Bob",
    date: "November 18, 2026",
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app-layout">
        <Sidebar />
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./styles/Layout.css";

        <div className="app-main">
          <main className="main-content">
            <h1>Welcome to CommunityHub</h1>
            <p>Connect, share and interact with your community.</p>

            <Greeting name="Alice" />
            <Greeting name="Bob" />
            <Greeting name="Charlie" />

            <PostList posts={samplePosts} />

            <section>
              <h2>Button Examples</h2>

feature/task-15.3-props
              <Button text="Submit" variant="primary" />
              <Button text="Cancel" variant="secondary" />
              <Button text="Delete" variant="danger" />
              <Button />
            </section>
          </main>
      <div className="app-main">
        <Header />

        <main className="main-content">
          <h1>Welcome to CommunityHub</h1>
          <p>Connect, share and interact with your community.</p>
        </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
