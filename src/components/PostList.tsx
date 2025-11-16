/* eslint-disable @typescript-eslint/no-explicit-any */
// 1. PASTIKAN IMPORT INI BENAR
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const PostList = ({ posts }: any) => {
  if (!posts || posts.length === 0) {
    return (
      <p className="text-gray-500 italic">Tidak ada postingan ditemukan...</p>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {" "}
      {posts.map((post: any) => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <PostCard post={post} />{" "}
          </Link>
        )
      )}{" "}
    </div>
  );
};

export default PostList;
