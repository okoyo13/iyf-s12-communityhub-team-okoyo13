import { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !content.trim()) return;

    onAddPost({
      title: title.trim(),
      content: content.trim(),
    });

    setTitle("");
    setContent("");
  }

  return (
    <section>
      <h2>Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <Input
          id="post-title"
          label="Post Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter post title"
          required
        />

        <div>
          <label htmlFor="post-content">Post Content</label>
          <textarea
            id="post-content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Share something with the community"
            required
          />
        </div>

        <Button type="submit">Publish Post</Button>
      </form>
    </section>
  );
}

export default CreatePost;
