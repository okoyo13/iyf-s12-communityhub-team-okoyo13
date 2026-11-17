function PostList({ posts }) {
  return (
    <section>
      <h2>Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>Posted by {post.author}</small>
          </article>
        ))
      )}
    </section>
  )
}

export default PostList