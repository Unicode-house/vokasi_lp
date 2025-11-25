const PostCard = ({ post }: { post: { image: string; title: string; category: string; author: string } }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 md:w-44 md:h-32 rounded-xl object-cover"
      />

      <div className="flex flex-col justify-between">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs w-fit">
          {post.category}
        </span>

        <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 flex items-center gap-2">
          👤 {post.author}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
