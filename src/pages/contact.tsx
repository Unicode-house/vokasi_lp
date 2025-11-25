// import { motion } from "framer-motion";

// import Footer from '@/components/footer'
import { Mails, MapPinHouse, PhoneCall } from 'lucide-react'
import { useEffect } from 'react'
import * as Aos from 'aos'

const Contact = () => {
  useEffect(() => {
  Aos.init({
    duration: 600,
    easing: 'ease-out',
    once: true,
    mirror: false
  })

  // FIX reload
  setTimeout(() => {
    Aos.refreshHard()
  }, 300)
}, [])

  return (
    <section className='w-full h-full flex flex-col gap-4'>
      <section className="w-full h-[40vh] bg-[url('/background/bg-contact.jpg')] flex flex-col gap-4 justify-center items-center bg-bottom bg-no-repeat bg-cover">
        <h1 className=' md:text-6xl text-5xl text-center font-semibold text-slate-700' data-aos="fade-up">
          Kontak kami
        </h1>
      </section>
      <section className='w-full h-full'>
        <div className='w-full md:h-[81vh] h-full md:px-16 px-6 py-12  flex flex-col-reverse md:flex-row gap-12'>
          <div className='md:w-2/3 w-full flex flex-col gap-6'>
            {/* First / Last Name */}
            <div className='w-full flex flex-col md:flex-row gap-6'>
              <div className='md:w-1/2 w-full h-[75px] bg-[#6f50f4]/20 rounded-full flex items-center px-6' data-aos="fade-up">
                <input
                  type='text'
                  placeholder='Nama Depan'
                  className='w-full text-lg bg-transparent outline-none'
                />
              </div>

              <div className='md:w-1/2 w-full h-[75px] bg-[#6f50f4]/20 rounded-full flex items-center px-6' data-aos="fade-up" data-aos-delay="200">
                <input
                  type='text'
                  placeholder='Nama Belakang'
                  className='w-full text-lg bg-transparent outline-none'
                />
              </div>
            </div>

            {/* Email */}
            <div className='w-full h-[75px] bg-[#6f50f4]/20 rounded-full flex items-center px-6' data-aos="fade-up" data-aos-delay="400">
              <input
                type='text'
                placeholder='Email'
                className='w-full text-lg bg-transparent outline-none'
              />
            </div>

            {/* Message / Textarea */}
            <div className='w-full h-[250px] bg-[#6f50f4]/20 rounded-3xl px-6 py-4' data-aos="fade-up" data-aos-delay="600">
              <textarea
                placeholder='Message'
                className='w-full h-full text-lg bg-transparent outline-none resize-none'
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className='w-[250px] h-[50px] bg-[#6f50f4] rounded-full flex items-center justify-center text-white font-semibold cursor-pointer'  data-aos="fade-up" data-aos-delay="800">
              Submit
            </div>
          </div>

          <div className="md:w-1/3 w-full bg-[url('/background/bg-contact-2.jpg')] rounded-3xl bg-center h-full overflow-hidden" data-aos="fade-up" >
            <div className='w-full h-full bg-black/70 flex flex-col gap-6 px-6 pb-6 pt-12 justify-between'>
              <div className='flex flex-col gap-6'>
                <h3 className='text-white font-semibold text-4xl'data-aos="fade-up" data-aos-delay="200">
                  Ayo Bergabung Dengan Kami
                </h3>
                <p className='text-sm text-gray-300'data-aos="fade-up" data-aos-delay="400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  recusandae tempora mollitia laboriosam dolorum ex, laborum
                  officiis quasi, voluptatibus rerum accusamus doloribus vitae
                  nemo non nisi in asperiores. Laborum, saepe.
                </p>
              </div>
              <button className='w-full h-[55px] rounded-full bg-[#6f50f4] text-white capitalize hover:bg-[#5a3edc] transition-all' data-aos="fade-up" data-aos-delay="600">
                Gabung Sekarang
              </button>
            </div>
          </div>
        </div>
        <div className='w-full md:h-[40vh] h-full   md:px-16 px-6 py-4 mt-12 flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/3 w-full h-full bg-[#6f50f4]/90 rounded-3xl flex flex-col gap-4 px-6 py-12'data-aos="fade-up">
            <div className='w-full flex gap-4 items-center' data-aos="fade-up" data-aos-delay="200">
              {/* <Smartphone size={40} className="text-white" /> */}
              <PhoneCall size={40} className='text-white' />

              <h4 className='text-xl text-white font-semibold'>
                +62 812-9342-3248
              </h4>
            </div>
            <p className='text-white/80' data-aos="fade-up" data-aos-delay="400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              nesciunt consequatur possimus assumenda molestiae, illo, fuga
              reiciendis vel asperiores repellendus omnis dicta minima maiores
              aliquam, non eius laborum eos ex!
            </p>
          </div>
          <div className='md:w-1/3 w-full  h-full bg-[#6f50f4]/40 rounded-3xl flex flex-col gap-4 px-6 py-12' data-aos="fade-up" data-aos-delay="200">
            <div className='w-full flex gap-4 items-center' data-aos="fade-up" data-aos-delay="400">
              {/* <Smartphone size={40} className="text-white" /> */}
              <Mails size={40} className='text-black/70' />

              <h4 className='text-xl text-black/70 font-semibold'>
                DeltaKv@delta-kv.com
              </h4>
            </div>
            <p className='text-black/70' data-aos="fade-up" data-aos-delay="600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              nesciunt consequatur possimus assumenda molestiae, illo, fuga
              reiciendis vel asperiores repellendus omnis dicta minima maiores
              aliquam, non eius laborum eos ex!
            </p>
          </div>
          <div className='md:w-1/3 w-full h-full bg-[#6f50f4]/10 rounded-3xl flex flex-col gap-4 px-6 py-12' data-aos="fade-up" data-aos-delay="400">
            <div className='w-full flex gap-4 items-center' data-aos="fade-up" data-aos-delay="600">
              {/* <Smartphone size={40} className="text-white" /> */}
              {/* <Mails  /> */}
              <MapPinHouse size={40} className='text-[#6f50f4]' />

              <h4 className='text-xl text-[#6f50f4] font-semibold'>
                Jonggol, bogor
              </h4>
            </div>
            <p className='text-[#6f50f4]/80' data-aos="fade-up" data-aos-delay="800">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              nesciunt consequatur possimus assumenda molestiae, illo, fuga
              reiciendis vel asperiores repellendus omnis dicta minima maiores
              aliquam, non eius laborum eos ex!
            </p>
          </div>
        </div>
        <div className='w-full h-[60vh] rounded-4xl overflow-hidden  md:px-16 px-6 py-4 mt-6' data-aos="fade-up">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63429.320564851696!2d107.00274204916234!3d-6.47950050421234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bc0d7468736b%3A0x401576d14fed560!2sJonggol%2C%20Kec.%20Jonggol%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1764084071528!5m2!1sid!2sid'
            width='600'
            height='450'
            loading='lazy'
            className='w-full h-full'
          ></iframe>
        </div>
      </section>
      {/* <Footer/> */}
    </section>
  )
}

export default Contact


