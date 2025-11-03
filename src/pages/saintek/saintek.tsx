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
        <div className='w-full h-[90vh] grid grid-cols-3 gap-4 px-20'>
          {/* Large feature (kiri) */}
          <div className='col-span-2 relative rounded-3xl overflow-hidden group'>
            <img
              src='https://asset.kompas.com/crops/01JNoXR_OzJfy-94LkVRZthWi_0=/0x2:800x536/1200x800/data/photo/2024/09/19/66ebca0e60f61.jpg'
              alt=''
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl'></div>
            <div className='absolute inset-0 flex flex-col justify-end p-8 text-white gap-3'>
              <span className='py-1 px-4 bg-red-200 w-20 flex justify-center rounded-full text-red-500'>
                News
              </span>
              <h1 className='text-3xl md:text-4xl font-bold'>
                Pendiri dan mantan CEO Marvell Technology, Meninggal Dunia
              </h1>
              <p className='text-sm md:text-lg mt-2 max-w-3xl'>
                Sehat Sutardja, meninggal dunia di usia 63 tahun. Kepergiannya
                meninggalkan duka mendalam di dunia teknologi dan bisnis.
              </p>
            </div>
          </div>

          {/* Two stacked features (kanan) */}
          <div className='col-span-1 flex flex-col gap-4'>
            <div className='h-1/2 relative rounded-3xl overflow-hidden group'>
              <img
                src='https://akcdn.detik.net.id/community/media/visual/2025/03/14/ilustrasi-data-center-1741939204417_169.jpeg?w=700&q=90'
                alt=''
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/30 rounded-3xl flex items-end p-4'>
                <div className='text-white'>
                  <span className='px-3 py-1 rounded-full bg-[#8054f3] text-sm'>www.detik.com</span>
                  <h4 className='mt-2 font-semibold'>Ekonomi Digital Melonjak, Indonesia Berebut Jadi Pusat Data Center ASEAN</h4>
                </div>
              </div>
            </div>

            <div className='h-1/2 relative rounded-3xl overflow-hidden group'>
              <img
                src='https://akcdn.detik.net.id/community/media/visual/2020/10/28/ilustrasi-koneksi-internet_169.jpeg?w=700&q=90'
                alt=''
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-black/30 rounded-3xl flex items-end p-4'>
                <div className='text-white'>
                  <span className='px-3 py-1 rounded-full bg-[#8054f3] text-sm'>www.detik.com</span>
                  <h4 className='mt-2 font-semibold'>Isu Koneksi dan Infrastruktur: Dampak terhadap Transformasi Digital</h4>
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
