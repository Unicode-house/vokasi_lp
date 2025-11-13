import PostCard from "./PostCard";

interface PostListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[];
}

const PostList = ({ posts }: PostListProps) => {
  if (!posts || posts.length === 0) {
    return (
      <p className="text-gray-500 italic">Tidak ada postingan ditemukan...</p>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
