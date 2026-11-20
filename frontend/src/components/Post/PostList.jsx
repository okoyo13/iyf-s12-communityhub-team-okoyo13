
import PostCard from "./PostCard";

function PostList({ posts, onLike }) {
  return (
    <section aria-labelledby="community-posts-heading">
      <h2 id="community-posts-heading">Community Posts</h2>

      {posts.length === 0 ? (
        <p>No posts yet. Be the first to share something!</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
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
