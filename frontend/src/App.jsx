import { useState } from "react";

import Layout from "./components/Layout";
import UserGreeting from "./components/UserGreeting";
import Greeting from "./components/Greeting";
import Button from "./components/Button";
import Card from "./components/Card";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

import { sortNewestFirst } from "./utils/posts";

import Counter from "./exercises/okoyo13/Counter";
import Toggle from "./exercises/okoyo13/Toggle";
import UserForm from "./exercises/okoyo13/UserForm";
import EventExamples from "./exercises/okoyo13/EventExamples";
import ContactForm from "./exercises/okoyo13/ContactForm";
import TodoList from "./exercises/okoyo13/TodoList";
import LiftingStateUp from "./exercises/okoyo13/LiftingStateUp";

import "./styles/Layout.css";

const currentUser = { name: "Okoyo" };

const initialPosts = [
  {
    id: 1,
    title: "Welcome to CommunityHub",
    content: "This is our first community post.",
    author: "Okoyo",
    date: "2026-11-18T08:00:00",
    likes: 0,
  },
  {
    id: 2,
    title: "Learning React Props",
    content: "Props help us create reusable components.",
    author: "Chacha",
    date: "2026-11-18T10:00:00",
    likes: 0,
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  function handleAddPost(newPost) {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: "Community Member",
      date: new Date().toISOString(),
      likes: 0,
    };

    setPosts((previousPosts) => [post, ...previousPosts]);
  }

  const sortedPosts = sortNewestFirst(posts);

  return (
    <Layout>
      {/* CommunityHub Application */}
      <section id="home">
        <h1>Welcome to CommunityHub</h1>

        <p>Connect, share and interact with your community.</p>

        <section id="posts">
          <CreatePost onAddPost={handleAddPost} />

          <PostList posts={sortedPosts} />
        </section>
      </section>

      {/* Previous React Component Examples */}
      <section>
        <h1>React Component Examples</h1>

        <section>
          <h2>User Greeting Examples</h2>

          <UserGreeting user={currentUser} />
          <UserGreeting user={null} />
        </section>

        <section>
          <h2>Greeting Examples</h2>

          <Greeting name="Okoyo" />
          <Greeting name="Wilfred" />
          <Greeting name="Taura" />
        </section>

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
      </section>

      {/* React Task Exercises */}
      <section className="exercises">
        <h1>React Task Exercises</h1>

        <section>
          <h2>1. Counter Exercise</h2>
          <Counter />
        </section>

        <section>
          <h2>2. Toggle Exercise</h2>
          <Toggle />
        </section>

        <section>
          <h2>3. User Form Exercise</h2>
          <UserForm />
        </section>

        <section>
          <h2>4. Event Handler Examples</h2>
          <EventExamples />
        </section>

        <section>
          <h2>5. Controlled Contact Form</h2>
          <ContactForm />
        </section>

        <section>
          <h2>6. Todo List Exercise</h2>
          <TodoList />
        </section>

        <section>
          <h2>7. Lifting State Up</h2>
          <LiftingStateUp />
        </section>
      </section>
    </Layout>
  );
}

export default App;
