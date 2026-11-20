import useFetch from "../../hooks/useFetch";
import ApiPostCard from "./ApiPostCard";

function CustomFetchPosts() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <ApiPostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default CustomFetchPosts;
