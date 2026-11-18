
import { useState } from 'react'
import Button from "./Button";
function CreatePost({ onAddPost }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!author.trim() || !title.trim() || !content.trim()) {
      return;
    }

    onAddPost({
      author: author.trim(),
      title: title.trim(),
      content: content.trim(),
    });

    setAuthor("");
    setTitle("");
    setContent("");
  }

  return (
    <section>
      <h2>Create a Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="post-author">Your Name</label>
          <input
            id="post-author"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="post-title">Post Title</label>
          <input
            id="post-title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Enter post title"
            required
          />
        </div>

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
