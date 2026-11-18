import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <section>
      <h2>Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            excerpt={post.content}
            author={post.author}
            date={post.date || "Date unavailable"}
          />
        ))
      )}
    </section>
  );
}

export default PostList;
