import MemberCard from "../../components/memberCard";

const Profile = () => {
  const members = [
    {
      name: "SMK Madinatul Quran",
      image:
        "https://smkmadinatulquran.sch.id/wp-content/uploads/2025/11/01.jpg",
      logo: "https://smkmadinatulquran.sch.id/wp-content/uploads/2021/04/logo-SMK-MQ.png",
      location:
        "Kp.Kebon Kelapa, RT.02/RW.011, Singasari, Kec. Jonggol, Kabupaten Bogor, Jawa Barat 16830",
      categories: ["Teknik Komputer Jaringan", "Rekayasa Perangkat Lunak"],
      url : 'https://smkmadinatulquran.sch.id/'
    },
    {
      name: "SMAN 1 Bogor",
      image:
        "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01h5gxhtvh45g1kajn5nb3qxf7.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/id/thumb/5/51/SMA_Negeri_1_Bogor_Logo.png/250px-SMA_Negeri_1_Bogor_Logo.png",
      location:
        "Jl. Ir. H. Juanda No.16, RT.04/RW.01, Paledang, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16122",
      categories: ["IPA (MIPA)", "IPS (Sosial Budaya)"],
      url : 'https://sman1bogor.sch.id/'
    },
    {
      name: "SMK Wikrama Bogor",
      image: "https://smkwikrama.sch.id/storage/Bursa%20Kerja%20Khususpagejpg",
      logo: "https://smkwikrama.sch.id/assets2/wikrama-logo.png",
      location:
        "Jl. Raya Wangun, RT.01/RW.06, Sindangsari, Kec. Bogor Timur , Kota Bogor, Jawa Barat 16146",
      categories: [
        "PPLG",
        "TJKT",
        "DKV",
        "MPLB",
        "BDP (Pemasaran)",
        "Perhotelan",
        "Kuliner",
      ],
      url: 'https://smkwikrama.sch.id/',
    },
    {
      name: "SMKS Kusuma Wardhana Bogor",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxZHYTbc35X4ANWt8xftj4bxmaTuWQSOgMjwWWyQP6j5D52A9e1Y_LKP8PTElWAKg-lhB69IPvCn0EZBI5O0IdoVOjea-dQ7PS-j4-L-9CyNaOg3KKAVanMzo18mHQGtjEBBTl36Iw88s/s400/smk+kw-02.jpg",
      logo: "https://kusumawardhana.sch.id/wp-content/uploads/2024/03/smk-kusuma-wardhana-.webp",
      location:
        "Jl. Pangeran Sogiri No. 307 RT 04 RW 011 Tanahbaru, Kec. Kota Bogor Utara, Kota Bogor, Jawa Barat.",
      categories: [
        "Multimedia",
        "Teknik Pemesinan",
        "Teknik Kendaraan Ringan (TKR)",
      ],
      url : 'https://kusumawardhana.sch.id/'
    },
  ];

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
  );
};

export default Profile;
