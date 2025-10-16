/* eslint-disable @typescript-eslint/no-explicit-any */
// import Loader from '@/components/loader'
import useNewsModule from '@/hooks/useNewsModule'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  'AI',
  'Machine Learning',
  'Game Development',
  'Cybersecurity',
  'Blockchain',
  'Web Development',
  'Mobile Apps',
  'Cloud Computing',
  'AR/VR',
  'IoT',
  'Data Science',
  'DevOps',
  'Quantum Computing'
]

const colors = [
  'bg-green-500',
  'bg-purple-500',
  'bg-blue-500',
  'bg-emerald-500',
  'bg-orange-500',
  'bg-yellow-500',
  'bg-pink-500',
  'bg-amber-500'
]

const SaintekPage = () => {
  const navigator = useNavigate()
  const { useGetGNews } = useNewsModule()
  const { data } = useGetGNews()
  const scrollRef = useRef<HTMLDivElement>(null)

  // if (isLoading) {
  //   return (
  //     <div className='w-full h-screen flex flex-col gap-2 justify-center items-center'>
  //       <Loader />
  //       <div className='loadingtext'>
  //         <p>Loading</p>
  //       </div>
  //     </div>
  //   )
  // }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      })
    }
  }

  console.log(data)
  return (
    <main className='w-full h-full pt-20 bg-[#fcf9f5]'>
      <section className='w-full h-full flex flex-col gap-8 px-4'>
        <div className='relative w-full h-[75vh] overflow-hidden group rounded-3xl'>
          {/* Gambar */}
          <div className='w-full h-full rounded-3xl group-hover:scale-105 transition-all bg-[url("https://asset.kompas.com/crops/01JNoXR_OzJfy-94LkVRZthWi_0=/0x2:800x536/1200x800/data/photo/2024/09/19/66ebca0e60f61.jpg")] bg-cover bg-center'></div>

          {/* Overlay hitam setengah + gradasi */}
          <div className='absolute inset-0 rounded-3xl bg-gradient-to-t from-black/80 via-black/40 to-transparent'></div>

          {/* Tulisan di atas overlay */}
          <div className='absolute inset-0 flex flex-col justify-end p-8 text-white gap-3'>
            <span className='py-1 px-4 bg-red-200 w-20 flex justify-center rounded-full text-red-500'>
              News
            </span>
            <h1 className='text-4xl font-bold'>
              Pendiri dan mantan CEO Marvell Technology, Meninggal Dunia
            </h1>
            <p className='text-lg mt-2 max-w-5xl'>
              Sehat Sutardja, meninggal dunia di usia 63 tahun. Kepergiannya
              meninggalkan duka mendalam di dunia teknologi dan bisnis,
              mengingat perannya yang sangat signifikan dalam revolusi
              semikonduktor modern.
            </p>
          </div>
        </div>

        <div className='w-full h-[110vh] flex flex-col gap-4 px-4  mb-24'>
          <div className='w-full flex justify-between'>
            <h4 className='text-4xl font-bold'>Berita Kilat</h4>
            <div className='flex justify-end items-center gap-4 uppercase font-semibold text-gray-400'>
              <p>All</p>
              <p>Discovery</p>
              <p>literasi Teknologi</p>
            </div>
          </div>
          <div className='flex items-center gap-4 mb-2  w-full h-full'>
            <div className='w-2/3 h-full rounded-xl flex flex-col gap-4'>
              <div className='w-full h-2/3 '>
                <img
                  src='https://akcdn.detik.net.id/community/media/visual/2025/03/14/ilustrasi-data-center-1741939204417_169.jpeg?w=700&q=90'
                  alt=''
                  className='w-full h-full'
                />
                <div className='w-full h-full relative bottom-[100%] z-[2] bg-black/30 flex justify-center items-end rounded-t-xl'>
                  <div className='w-full h-1/3 flex flex-col gap-4 justify-center items-center  text-white'>
                    <span className='px-4 h-8 rounded-full bg-[#8054f3]  flex justify-center items-center text-white font-semibold'>
                      www.detik.com
                    </span>
                    <h4 className='w-4/5  text-center text-xl px-4'>
                      Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat
                      Data Center ASEAN Baca artikel detikinet, "Ekonomi Digital
                      Melonjak, Indonesia Berebut Jadi Pusat Data Center ASEAN"
                    </h4>
                  </div>
                </div>
                {/* <div className='w-full h-full relative bottom-[100%] bg-black/20 flex justify-center items-end '>
                  <div className='w-full h-1/3 bg-white flex justify-center items-center'>
                  <span className='w-12 h-6 bg-[#8054f3]'></span>
                  </div>
                </div> */}
                {/* <div className='w-full h-full relative bottom-[200%] bg-red-500 z-[3]'></div> */}
              </div>
              <div className='w-full h-1/3 flex gap-4'>
                <div className='w-1/2 h-full relative group overflow-hidden '>
                  <img
                    src='https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90'
                    alt=''
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />

                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-end pb-6'>
                    <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
                      <span className='px-4 h-8 rounded-full text-sm bg-[#8054f3] flex justify-center items-center text-white font-semibold'>
                        www.detik.com
                      </span>
                      <h4 className='w-full text-center text-sm px-4'>
                        Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat
                        Data Center ASEAN Baca artikel detikinet, "Ekonomi
                        Digital Melonjak, Indonesia Berebut Jadi Pusat Data
                        Center ASEAN"
                      </h4>
                    </div>
                  </div>
                </div>

                <div className='w-1/2 h-full relative group overflow-hidden '>
                  <img
                    src='https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90'
                    alt=''
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />

                  <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-end pb-6'>
                    <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
                      <span className='px-4 h-8 rounded-full text-sm bg-[#8054f3] flex justify-center items-center text-white font-semibold'>
                        www.detik.com
                      </span>
                      <h4 className='w-full text-center text-sm px-4'>
                        Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat
                        Data Center ASEAN Baca artikel detikinet, "Ekonomi
                        Digital Melonjak, Indonesia Berebut Jadi Pusat Data
                        Center ASEAN"
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-1/3 h-full rounded-xl flex flex-col gap-4'>
              <div className='w-full h-1/2 relative group overflow-hidden '>
                <img
                  src='https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90'
                  alt=''
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-end pb-6'>
                  <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
                    <span className='px-4 h-8 rounded-full text-sm bg-[#8054f3] flex justify-center items-center text-white font-semibold'>
                      www.detik.com
                    </span>
                    <h4 className='w-full text-center text-sm px-4'>
                      Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat
                      Data Center ASEAN Baca artikel detikinet, "Ekonomi Digital
                      Melonjak, Indonesia Berebut Jadi Pusat Data Center ASEAN"
                    </h4>
                  </div>
                </div>
              </div>

              <div className='w-full h-1/2 relative group overflow-hidden '>
                <img
                  src='https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90'
                  alt=''
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-end pb-6'>
                  <div className='w-full h-1/3 flex flex-col gap-2 justify-center items-center text-white translate-y-10 group-hover:translate-y-0 transition-all duration-500'>
                    <span className='px-4 h-8 rounded-full text-sm bg-[#8054f3] flex justify-center items-center text-white font-semibold'>
                      www.detik.com
                    </span>
                    <h4 className='w-full text-center text-sm px-4'>
                      Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat
                      Data Center ASEAN Baca artikel detikinet, "Ekonomi Digital
                      Melonjak, Indonesia Berebut Jadi Pusat Data Center ASEAN"
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-full flex gap-6 flex-col px-24 mt-2 mb-24'>
          <div className='w-full h-full pb-6 flex flex-col gap-4 justify-center items-center'>
            <div className='w-12 h-6 rounded-full bg-[#8054f3] flex justify-center items-center text-white text-sm'>
              Blog
            </div>
            <h2 className='text-6xl font-bold'>Berita Terbaru</h2>
            <p className='w-1/2 text-center'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis recusandae totam odio repellat inventore quo quaerat
              deleniti asperiores nulla libero tempora reiciendis eum omnis
              cupiditate, voluptatem quasi porro animi dolor!
            </p>
          </div>

          <div className='relative w-full flex items-center px-8'>
            {/* Tombol kiri */}
            <button
              title='prev'
              onClick={() => scroll('left')}
              className='absolute left-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100'
            >
              <ChevronLeft className='w-5 h-5' />
            </button>

            {/* Scrollable menu */}
            <div
              ref={scrollRef}
              className='flex gap-3 overflow-x-auto no-scrollbar scroll-smooth px-14 w-full'
            >
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`flex-shrink-0 px-4 py-2 text-white rounded-full transition 
          ${colors[idx % colors.length]} hover:brightness-90`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tombol kanan */}
            <button
              title='next'
              onClick={() => scroll('right')}
              className='absolute right-4 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100'
            >
              <ChevronRight className='w-5 h-5' />
            </button>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {data?.map((i: any, index: number) => (
              <div
                key={index}
                onClick={() => navigator(`/saintek/news/${i.id}`)}
                className='w-full h-[450px] rounded-xl  flex flex-col gap-2 hover:cursor-pointer hover:text-[#F2F2F2] p-2 bg-[#F2F2F2] hover:bg-[#171719] transition-all'
              >
                <div className={`w-full h-2/3 rounded-xl `}>
                  <img
                    src={i.image}
                    alt=''
                    className='w-full h-full rounded-xl'
                  />
                  <div className='w-full h-full relative bottom-[100%] px-4 py-4'>
                    <div className='px-4 py-1 bg-[#8054f3] text-white flex justify-center  w-24 rounded-full'>
                      halo
                    </div>
                  </div>
                </div>
                <div className='w-full h-1/3 rounded-xl  flex flex-col gap-1 px-1'>
                  <p>{i.publishedAt}</p>
                  <h2 className='text-lg font-bold'>{i.title}</h2>
                  {/* <p className='text-sm ellipsis-2'>
                    {i.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default SaintekPage
