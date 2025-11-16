import MemberCard from '../../components/memberCard'

const Profile = () => {
  const members = [
    {
      name: 'SMK Madinatul Quran',
      image: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg',
      logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png',
      location: 'Jawa Barat',
      category1: 'Bisnis dan Manajemen',
      category2: 'Bahasa'
    },
    {
      name: 'LPK Shinjiru Mirai Indonesia',
      image: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg',
      logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png',
      location: 'Jawa Tengah',
      category1: 'Bahasa Jepang',
      category2: 'Keterampilan'
    },
    {
      name: 'LPK PKBM Sipatuwo Deceng',
      image: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg',
      logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png',
      location: 'Sulawesi Selatan',
      category1: 'Keterampilan',
      category2: 'Bahasa'
    },
    {
      name: 'LPK Heliyana Lely',
      image: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg',
      logo: 'https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png',
      location: 'DKI Jakarta',
      category1: 'Bahasa',
      category2: 'Manajemen'
    }
  ]

  return (
    <div className="w-full min-h-screen bg-[#fcfaf4] flex flex-col items-center">
      {/* ===== Banner Section ===== */}
      <div className="w-full h-[350px] relative overflow-hidden">
        <img
          src="https://www.shutterstock.com/image-photo/indonesian-flag-on-independence-day-600nw-1457398277.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== Title Section ===== */}
      <div className="w-11/12 max-w-7xl mt-10 text-center">
        <h1 className="text-3xl font-extrabold text-blue-700 tracking-wide">
          DIREKTORI KELEMBAGAAN ANGGOTA
        </h1>
        <div className="w-28 h-[3px] bg-red-500 mx-auto mt-2 rounded-full" />
      </div>

      {/* ===== Sort Dropdown ===== */}
      <div className="w-11/12 max-w-7xl flex justify-end mt-8 mb-6">
        <select className="border rounded-md px-4 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none">
          <option>Sort by: New users first</option>
          <option>Sort by: Name</option>
        </select>
      </div>

      {/* ===== Member Cards Grid ===== */}
      <div className="w-11/12 max-w-7xl mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center">
          {members.map((m, i) => (
            <MemberCard key={i} {...m} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
