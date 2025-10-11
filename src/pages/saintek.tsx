const SaintekPage = () => {
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
        <div className='w-full h-screen flex gap-6 flex-col px-6 mt-6'>
          <h2 className='text-2xl font-semibold'>Literasi Digital Terbaru</h2>
          <div className='grid grid-cols-3 gap-6'>
            <div className='w-full h-[400px] rounded-xl  flex flex-col gap-2 hover:cursor-pointer hover:scale-105 transition-all'>
              <div className='w-full h-2/3 rounded-xl bg-red-500'></div>
              <div className='w-full h-1/3 rounded-xl  flex flex-col gap-2 px-1'>
                <h2 className='text-2xl font-bold'>Judul Berita</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem voluptatibus beatae qui maiores atque, dolorum
                  est pariatur quam magnam cumque eum quisquam.
                              </p>
              </div>
            </div>
            <div className='w-full h-[400px] rounded-xl  flex flex-col gap-2'>
              <div className='w-full h-2/3 rounded-xl bg-red-500'></div>
              <div className='w-full h-1/3 rounded-xl  flex flex-col gap-2 px-1'>
                <h2 className='text-2xl font-bold'>Judul Berita</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem voluptatibus beatae qui maiores atque, dolorum
                  est pariatur quam magnam cumque eum quisquam.
                              </p>
              </div>
            </div>
            <div className='w-full h-[400px] rounded-xl  flex flex-col gap-2'>
              <div className='w-full h-2/3 rounded-xl bg-red-500'></div>
              <div className='w-full h-1/3 rounded-xl  flex flex-col gap-2 px-1'>
                <h2 className='text-2xl font-bold'>Judul Berita</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem voluptatibus beatae qui maiores atque, dolorum
                  est pariatur quam magnam cumque eum quisquam.
                              </p>
              </div>
            </div>
            <div className='w-full h-[400px] rounded-xl  flex flex-col gap-2'>
              <div className='w-full h-2/3 rounded-xl bg-red-500'></div>
              <div className='w-full h-1/3 rounded-xl  flex flex-col gap-2 px-1'>
                <h2 className='text-2xl font-bold'>Judul Berita</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem voluptatibus beatae qui maiores atque, dolorum
                  est pariatur quam magnam cumque eum quisquam.
                              </p>
              </div>
            </div>
            <div className='w-full h-[400px] rounded-xl  flex flex-col gap-2'>
              <div className='w-full h-2/3 rounded-xl bg-red-500'></div>
              <div className='w-full h-1/3 rounded-xl  flex flex-col gap-2 px-1'>
                <h2 className='text-2xl font-bold'>Judul Berita</h2>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Exercitationem voluptatibus beatae qui maiores atque, dolorum
                  est pariatur quam magnam cumque eum quisquam.
                              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SaintekPage
