export function validatePost(title, content) {
  return title.trim() !== "" && content.trim() !== "";
}

export function createPost(title, content, author = "Community Member") {
  return {
    id: Date.now(),
    title: title.trim(),
    content: content.trim(),
    author,
  };
}

export function countPosts(posts) {
  return posts.length;
}
export function searchPosts(posts, searchTerm) {
  const term = searchTerm.trim().toLowerCase();

  if (term === "") {
    return posts;
  }

  return posts.filter(
    (post) =>
      post.title.toLowerCase().includes(term) ||
      post.content.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term),
  );
}
