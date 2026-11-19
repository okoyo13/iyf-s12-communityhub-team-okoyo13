
import { useState } from "react";

function CreatePost({ onAddPost }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    onAddPost(form);

    setForm({
      title: "",
      content: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="create-post">
      <h3>Create a post</h3>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Post title"
      />

      <textarea
        name="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write your post..."
      />

      <button type="submit">Publish Post</button>
    </form>
  );
}

export default CreatePost;
