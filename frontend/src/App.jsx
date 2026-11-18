 Wilfred-Mutuma/week-08-communityhub
import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Footer from "./components/Footer";


import UserGreeting from "./components/UserGreeting";
import Layout from "./components/Layout";
import Greeting from "./components/Greeting";
import PostList from "./components/PostList";
import Button from "./components/Button";
import Card from "./components/Card";

import "./styles/Layout.css";
import Counter from "./exercises/okoyo13/Counter";
import Toggle from "./exercises/okoyo13/Toggle";
import UserForm from "./exercises/okoyo13/UserForm";
import EventExamples from "./exercises/okoyo13/EventExamples";
import ContactForm from "./exercises/okoyo13/ContactForm";
import TodoList from "./exercises/okoyo13/TodoList";

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
const currentUser = { name: "Rodricks" };

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
Wilfred-Mutuma/week-08-communityhub
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

    <Layout>
      <h1>Welcome to CommunityHub</h1>
      <p>Connect, share and interact with your community.</p>
      <UserGreeting user={currentUser} />
      <UserGreeting user={null} />

      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />

      <PostList posts={samplePosts} />

      <section>
        <h2>Button Examples</h2>
        <Button text="Submit" variant="primary" />
        <Button text="Cancel" variant="secondary" />
        <Button text="Delete" variant="danger" />
        <Button />
      </section>

      <section>
        <h2>Card Examples</h2>

        <Card title="Welcome">
          <p>This is the card content!</p>
          <Button text="Click me" />
        </Card>

        <Card>
          <p>This card has no title.</p>
        </Card>
      </section>

      <section>
        <h2> Counter Exercise</h2>
        <Counter />
      </section>

      <section>
        <h2> Toggle Exercise</h2>
        <Toggle />
      </section>

      <section>
        <h2>User Form Exercise</h2>
        <UserForm />
      </section>

      <section>
        <h2>Event Handler Examples</h2>
        <EventExamples />
      </section>

      <section>
        <h2>Controlled Contact Form</h2>
        <ContactForm />
      </section>

      <section>
        <h2>Todo List Exercise</h2>
        <TodoList />
      </section>
    </Layout>
  );
}

export default App;