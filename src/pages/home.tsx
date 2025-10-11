import HeroLayout from '@/layouts/home/hero'

const HomePage = () => {
  return (
    <main className='w-full h-screen'>
      <HeroLayout />
      <section
        className='w-full h-[40vh] bg-[#fcf9f5] px-4 py-2'>
        <div className='w-full flex gap-4 items-center'></div>
        </section>
      <section className='bg-[#fcf9f5] h-screen w-full flex gap-2 '>
        <section className='w-1/2 h-full bg-red-500 p-4'></section>
        <section className='w-1/2 h-full bg-red-500 p-4'></section>
      </section>
    </main>
  )
}

export default HomePage
