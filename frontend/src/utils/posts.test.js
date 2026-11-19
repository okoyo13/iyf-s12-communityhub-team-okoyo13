import { describe, it, expect } from "vitest";
import { sortNewestFirst } from "./posts";

describe("sortNewestFirst", () => {
  it("sorts posts from newest to oldest", () => {
    const posts = [
      { id: 1, title: "Older post", date: "2026-11-16" },
      { id: 2, title: "Newer post", date: "2026-11-18" },
      { id: 3, title: "Middle post", date: "2026-11-17" },
    ];

    const sortedPosts = sortNewestFirst(posts);

    expect(sortedPosts.map((post) => post.id)).toEqual([2, 3, 1]);
  });

  it("does not modify the original posts array", () => {
    const posts = [
      { id: 1, date: "2026-11-16" },
      { id: 2, date: "2026-11-18" },
    ];

    sortNewestFirst(posts);

    expect(posts.map((post) => post.id)).toEqual([1, 2]);
  });

  it("returns an empty array when given no posts", () => {
    expect(sortNewestFirst([])).toEqual([]);
  });
});
