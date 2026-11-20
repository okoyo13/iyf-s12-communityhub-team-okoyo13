feature/task-17.3-react-router

feature/task-17.2-data-fetching
import Counter from "./exercises/okoyo13/Counter";
import Toggle from "./exercises/okoyo13/Toggle";
import UserForm from "./exercises/okoyo13/UserForm";
import EventExamples from "./exercises/okoyo13/EventExamples";
import ContactForm from "./exercises/okoyo13/ContactForm";
import TodoList from "./exercises/okoyo13/TodoList";
import LiftingStateUp from "./exercises/okoyo13/LiftingStateUp";
import ApiPostList from "./exercises/okoyo13/ApiPostList";
import CustomFetchPosts from "./exercises/okoyo13/CustomFetchPosts";

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


feature/task-17.2-data-fetching
        <section>
          <h2>Button Examples</h2>
          <Button text="Submit" variant="primary" />
          <Button text="Cancel" variant="secondary" />
          <Button text="Delete" variant="danger" />
          <Button text="Loading..." loading={true} />
          <Button />
        </section>

        <section>
          <h2>Card Examples</h2>

          <Card title="Primary Card" variant="primary">
            <p>This is a primary card.</p>
          </Card>

          <Card title="Secondary Card" variant="secondary">
            <p>This is a secondary card.</p>
          </Card>

          <Card title="Outlined Card" variant="outlined">
            <p>This is an outlined card.</p>
          </Card>

          <Card>
            <p>This card has no title and uses the default primary variant.</p>
          </Card>
        </section>
        <section>
          <h2>User List Examples</h2>
          <UserList users={users} />
          <UserList users={[]} />
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

        <section>
          <h2>8. Data Fetching - API Posts</h2>
          <ApiPostList />
        </section>

        <section>
          <h2>9. Custom Fetch Hook</h2>
          <CustomFetchPosts />
        </section>
      </section>
    </Layout>

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
