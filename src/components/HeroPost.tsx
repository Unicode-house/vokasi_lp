const HeroPost = ({ post }: { post: { image: string; title: string; author: string; date: string; description: string } }) => {
  return (
    <div className="rounded-3xl overflow-hidden bg-black text-white">
      <div className="relative h-80">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      <div className="p-6 lg:p-8">
        <h2 className="text-2xl font-semibold">{post.title}</h2>

        <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
          <span>👤 {post.author}</span> • <span>{post.date}</span>
        </p>

        <p className="text-gray-200 mt-3 line-clamp-2">{post.description}</p>

        <button className="mt-4 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default HeroPost;
