import PostCard from "./PostCard";

function PostList({ posts }) {
  return (
    <section>
      <h2>Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))
      )}
    </section>
  );
}

export default PostList;