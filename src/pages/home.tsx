import AboutSection from '@/layouts/home/about'
import HeroLayout from '@/layouts/home/hero'
import VisiBox from '@/layouts/home/visiBox'

const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-[#f8fafc]">
      <HeroLayout />
      <section className="w-full h-[40vh] bg-[#fcf9f5] px-4 py-2">
        <div className="w-full flex gap-4 items-center"></div>
      </section>
      <section className="w-full flex justify-center px-2 py-6">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <AboutSection />
          </div>
          <div className="flex-1 max-w-md w-full">
            <VisiBox />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage