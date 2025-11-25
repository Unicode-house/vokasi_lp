const SidebarRecent = ({ items }: { items: Array<{ id: string | number; image: string; title: string }> }) => {
  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">Post Terbaru</h3>

      <div className="flex flex-col gap-4">
        {items.map((post) => (
          <div key={post.id} className="flex items-center gap-3">
            <img
              src={post.image}
              alt={post.title}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <p className="text-sm font-medium text-gray-900 leading-snug line-clamp-2">
              {post.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRecent;
