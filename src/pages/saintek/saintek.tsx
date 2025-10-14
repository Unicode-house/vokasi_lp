/* eslint-disable @typescript-eslint/no-explicit-any */
import Loader from '@/components/loader'
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

        <div className='w-full h-full flex gap-6 flex-col px-6 mt-6'>
          <h2 className='text-xl font-semibold mb-4 uppercase'>
            Literasi Digital Terbaru
          </h2>
          <div className='grid grid-cols-3 gap-6'>
            {data?.map((i: any, index: number) => (
              <div
                key={index}
                onClick={() => navigator(`/saintek/news/${i.id}`)}
                className='w-full h-[450px] rounded-xl  flex flex-col gap-2 hover:cursor-pointer hover:scale-105 transition-all'
              >
                <div className={`w-full h-2/3 rounded-xl `}>
                  <img
                    src={i.image}
                    alt=''
                    className='w-full h-full rounded-xl'
                  />
                </div>
                <div className='w-full h-1/3 rounded-xl  flex flex-col gap-1 px-1'>
                  <p>{i.publishedAt}</p>
                  <h2 className='text-xl font-bold'>{i.title}</h2>
                  {/* <p className='text-sm ellipsis-2'>
                    {i.description}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full h-[70vh] flex items-center gap-4 mb-6 px-4'>
          <div className='w-1/2 h-full rounded-xl bg-red-100'></div>
          <div className='w-1/2 h-full rounded-xl bg-red-100'></div>
        </div>
      </section>
    </main>
  )
}

export default SaintekPage
