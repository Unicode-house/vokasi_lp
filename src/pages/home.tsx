import AboutSection from '@/layouts/home/about'
import HeroLayout from '@/layouts/home/hero'

const HomePage = () => {
  return (
    <main className="w-full min-h-screen bg-[#f8fafc]">
      <HeroLayout />

      <section className="bg-transparent w-full flex flex-col items-center ">
        <div className="shadow-lg">
          <AboutSection />
        </div>
      </section>
    </main>
  )
}

export default HomePage