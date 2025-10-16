// import AboutSection from '@/layouts/home/about'
// import AboutPage2 from '@/layouts/home/about2'
// import CobaGSAP from '@/layouts/home/cobagsap'
import TwoColFourRowScrollPublic from '@/layouts/home/about'
import HeroLayout from '@/layouts/home/hero'

const HomePage = () => {
  return (
    <main
      className='w-full min-h-screen bg-[#fcfaf4
]'
    >
      <HeroLayout />

      <TwoColFourRowScrollPublic/>
      {/* <CobaGSAP /> */}
      <section></section>
    </main>
  )
}

export default HomePage
