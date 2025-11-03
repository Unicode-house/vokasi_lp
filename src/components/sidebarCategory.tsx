import { Link } from 'react-router-dom'

type Props = {
  categories?: string[]
}

const Sidebar = ({ categories = [] }: Props) => {
  return (
    <div className="hidden md:block">
      <div className="sticky top-28 space-y-6">


        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            {categories.length
              ? categories.map((c) => (
                  <li key={c}>
                    <Link
                      to={`/saintek?category=${encodeURIComponent(c)}`}
                      className="text-gray-600 hover:text-black block"
                    >
                      {c}
                    </Link>
                  </li>
                ))
              : (
                <>
                  <li><Link to="/saintek?category=Politics" className="text-gray-600 hover:text-black block">Politics</Link></li>
                  <li><Link to="/saintek?category=National" className="text-gray-600 hover:text-black block">National</Link></li>
                  <li><Link to="/saintek?category=International" className="text-gray-600 hover:text-black block">International</Link></li>
                  <li><Link to="/saintek?category=Technology" className="text-gray-600 hover:text-black block">Technology</Link></li>
                </>
              )}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow p-4 text-sm text-gray-500">
          <div className="font-semibold mb-2">About</div>
          <div>Ringkasan singkat atau link lain di sini.</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar  