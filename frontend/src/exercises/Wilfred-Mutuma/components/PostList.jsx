
import PostCard from "./PostCard";

function PostList({ posts, onLike, onDelete }) {
  return (
    <div>
      {posts.length === 0 ? (
        <p>No posts available. Create the first post!</p>
      ) : (
        posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={onLike}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default PostList;
