export function validatePost(title, content) {
  return title.trim() !== '' && content.trim() !== ''
}

export function createPost(title, content, author = 'Community Member') {
  return {
    id: Date.now(),
    title: title.trim(),
    content: content.trim(),
    author
  }
}

export function countPosts(posts) {
  return posts.length
}