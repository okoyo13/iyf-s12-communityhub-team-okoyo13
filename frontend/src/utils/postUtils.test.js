import { describe, it, expect } from "vitest";
import { validatePost, createPost, countPosts, searchPosts } from "./postUtils";

describe("Post utility functions", () => {
  it("checks that a post has a title and content", () => {
    expect(validatePost("Hello", "Welcome everyone")).toBe(true);
    expect(validatePost("", "Welcome everyone")).toBe(false);
  });

  it("creates a post with the correct details", () => {
    const post = createPost("Hello", "Welcome everyone", "Taura");

    expect(post.title).toBe("Hello");
    expect(post.content).toBe("Welcome everyone");
    expect(post.author).toBe("Taura");
  });

  it("counts the number of posts", () => {
    const posts = [
      { id: 1, title: "First post" },
      { id: 2, title: "Second post" },
      { id: 3, title: "Third post" },
    ];

    expect(countPosts(posts)).toBe(3);
    expect(countPosts([])).toBe(0);
  });

  it("searches posts by title, content, and author", () => {
    const posts = [
      {
        id: 1,
        title: "React Basics",
        content: "Learn components",
        author: "Alice",
      },
      {
        id: 2,
        title: "JavaScript",
        content: "Learn functions",
        author: "Bob",
      },
      {
        id: 3,
        title: "Community News",
        content: "React meetup",
        author: "Charlie",
      },
    ];

    expect(searchPosts(posts, "React")).toHaveLength(2);
    expect(searchPosts(posts, "Bob")).toHaveLength(1);
    expect(searchPosts(posts, "JavaScript")).toHaveLength(1);
    expect(searchPosts(posts, "")).toHaveLength(3);
  });
});
