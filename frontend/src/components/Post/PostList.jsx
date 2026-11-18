import PostCard from "./PostCard";

function PostList({ posts, onLike }) {
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
            date={post.date}
            likes={post.likes}
            onLike={() => onLike(post.id)}
          />
        ))
      )}
    </section>
  );
}

export default PostList;
