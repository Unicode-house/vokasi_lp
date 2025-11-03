// import AboutSection from '@/layouts/home/about'
// import AboutPage2 from '@/layouts/home/about2'
// import CobaGSAP from '@/layouts/home/cobagsap'
import TwoColFourRowScrollPublic from "@/components/about";
// import HeroLayout from "@/layouts/home/hero";
// import TwoColFourRowScrollPublic from '@/layouts/home/about'
import GalleryPage from '@/layouts/home/gallery'
import HeroLayout from '@/layouts/home/hero'
import MemberDelta from '@/layouts/home/member'
// import TestimonialsSection from '@/layouts/home/testimoni'

const HomePage = () => {
  return (
    <main
      className="w-full min-h-screen bg-[#fcfaf4]"
      // className='w-full min-h-screen bg-[#fcfaf4]'
    >
      <HeroLayout />

      <TwoColFourRowScrollPublic />
      {/* <TwoColFourRowScrollPublic /> */}
      {/* <CobaGSAP /> */}
      {/* <TestimonialsSection /> */}
      <MemberDelta/>
      <GalleryPage/>
      <section></section>
    </main>
  );
};

export default HomePage;
