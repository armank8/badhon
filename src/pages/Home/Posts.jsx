import { posts } from "../../constants/Posts";
import Post from "./Post";

export default function Posts() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-20">
      {posts.map((post) => (
        <Post key={post._id} post={post}></Post>
      ))}
    </div>
  );
}
