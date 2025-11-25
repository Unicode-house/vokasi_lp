const Breadcrumb = ({ items }: { items: string[] }) => {
  return (
    <nav className="text-sm text-gray-500 mb-4 ">
      <ol className="flex gap-1 ">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className={`${index !== items.length - 1 ? "text-blue-600" : "text-gray-800"}`}>
              {item}
            </span>
            {index !== items.length - 1 && <span className="mx-1">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
