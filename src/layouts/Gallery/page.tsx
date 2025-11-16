import GalleryMasonry from '@/components/GalleryMasonry'

const GalleryMainPage = () => {
  const images = [
    'https://i.pinimg.com/736x/06/33/32/06333263632d204c46459f94f7e3a6e6.jpg',
    'https://i.pinimg.com/736x/24/f1/60/24f160011da7d0ae2a709ce16e24b82e.jpg',
    'https://i.pinimg.com/736x/0e/54/3d/0e543dfe106b4bd5a01cd6f82e25cdef.jpg',
    'https://i.pinimg.com/736x/10/7a/8d/107a8df6653e65f838e83493c7be9135.jpg',
    'https://i.pinimg.com/736x/f3/75/0f/f3750f16f4589c92c1010739530972bf.jpg',
    'https://i.pinimg.com/736x/98/37/a5/9837a5b0b3d575ec376fac57fcd61cf1.jpg',
    'https://i.pinimg.com/736x/b6/20/24/b62024296b0bc87e05fd60cf1ba48b04.jpg',
    'https://i.pinimg.com/736x/71/77/98/7177985535ec83dc423241345facaaee.jpg',
    'https://i.pinimg.com/736x/b9/62/96/b9629642252c2f6c4a821b285bb0cb72.jpg',
    'https://i.pinimg.com/736x/4b/ac/96/4bac963590fe5b60b72dc3e73d58c1ba.jpg',
    'https://i.pinimg.com/736x/15/1c/e8/151ce8d3a77dc95be763335f4b30d7a9.jpg'
  ]

  return (
    <main className='w-full min-h-screen flex flex-col gap-6 bg-[#fdfaf6] pt-20'>
      <section className='w-full h-[50vh] bg-[#22292e] flex justify-center items-center'>
        <div className='flex flex-col items-center text-center space-y-2'>
          <h1 className='text-4xl md:text-5xl font-light tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400'>
            Gallery komunitas Kami
          </h1>
          <div className='h-[2px] w-24 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400 rounded-full'></div>
          <p className='text-gray-200 text-sm md:text-base italic'>
            Inspirasi, kolaborasi dan inovasi yang tidak pernah ada habisnya
            tersimpan sebagai bukti nyata
          </p>
        </div>
      </section>
      <section className='w-full h-full'>
        <div className='relative w-full px-12 overflow-hidden'>
          <div className='pb-24'>
            <GalleryMasonry images={images} />
          </div>

          {/* Gradient fade bawah */}
          <div className='pointer-events-none absolute bottom-0 left-0 w-full h-46 bg-gradient-to-t from-[#fdfaf6] to-transparent'></div>
        </div>
      </section>
    </main>
  )
}

export default GalleryMainPage
