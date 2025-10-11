import { motion } from 'framer-motion'

const HeroLayout = () => {
  const text = 'KOLABORASI, PENGEMBANGAN & INOVASI'
  const letters = text.split('')

  return (
    <section className="min-h-screen bg-bottom flex flex-col w-full bg-cover justify-center items-center text-center bg-[url('/bg-home2.png')] relative overflow-hidden px-4">
      <p className='text-gray-400 uppercase tracking-widest text-sm mb-3 flex flex-wrap'>
        {letters.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * 0.05, // kecepatan ketik
              duration: 0.04
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </p>
      {/* Title */}
      {/* <h1 className='text-4xl md:text-6xl font-bold text-gray-900 leading-tight capitalize'>
          organisasi vokasi
          <br className='hidden md:block' />
          <span className='text-gray-900 capitalize'> Kota Bogor</span>
        </h1> */}

      <motion.div
        className='relative inline-block mb-3 mt-2'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          className='text-[5rem] md:text-[7rem] font-bold text-gray-900 leading-none flex gap-2 items-center mr-8'
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.2,
            type: 'spring',
            stiffness: 80,
            delay: 0.3
          }}
        >
          {/* Logo animasi berputar & masuk dari kiri */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              delay: 0.4,
              type: 'spring',
              stiffness: 80
            }}
            className='w-48 h-48 relative z-2 left-6 bg-[url("/logos/logo_delta.png")] bg-cover drop-shadow-lg'
          />

          {/* Huruf "e" dengan efek glow pulse */}
          <motion.span
            className='inline-block relative'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className='absolute inset-0 flex items-center justify-center'
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <span className='w-14 h-7 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-sm opacity-70'></span>
            </motion.span>
            <motion.span
              className='relative z-10'
              animate={{
                textShadow: [
                  '0px 0px 4px rgba(167,139,250,0.5)',
                  '0px 0px 10px rgba(59,130,246,0.8)',
                  '0px 0px 4px rgba(167,139,250,0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              e
            </motion.span>
          </motion.span>

          {/* Huruf “lta” fade-in belakangan */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          >
            lta
          </motion.span>
        </motion.h1>
      </motion.div>
      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: 'easeInOut' }}
        className='text-gray-500 max-w-xl mx-auto mb-8'
      >
        Kami mengubah kolaborasi menjadi inovasi. Kami berfokus pada
        pemberdayaan pendidikan vokasional di seluruh kota melalui transformasi
        digital dan kerja sama tim.
      </motion.p>
      {/* Buttons */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
        <motion.button
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeInOut' }}
          className='bg-[#c8c8f2] hover:bg-[#c8c8f2] text-black font-semibold px-8 py-3 rounded-full shadow transition'
        >
          Join our movement
        </motion.button>
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          href='#about'
          className='text-gray-800 font-medium underline underline-offset-4'
        >
          More about us
        </motion.a>
      </div>
      {/* Sponsor */}
      <div className='mt-16 flex flex-col items-center justify-center text-gray-400'>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          className='text-sm mb-3'
        >
          Powered by
        </motion.p>
        <div className='flex items-center gap-2'>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
            src='/logos/logo_unicode.png'
            alt='Universe Code'
            className='h-6 opacity-80'
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5, ease: 'easeOut' }}
            className='font-semibold text-gray-600 tracking-wide'
          >
            Unicode
          </motion.span>
        </div>
      </div>
      <div className='absolute w-full h-screen z-[99] flex items-center '>
        <div className='w-1/2 flex gap-2 items-center h-full'>
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -15 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-24 h-24 bg-white rounded-xl relative bottom-56 left-32  shadow-xl'
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100, rotate: 30 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className='w-16 h-16 bg-white rounded-xl relative bottom-24 left-44  shadow-xl'
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'backOut' }}
            className='w-20 h-20 bg-white rounded-xl relative top-64 left-44 shadow-xl'
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className='w-36 h-36 bg-white rounded-xl relative top-36 right-36 shadow-xl'
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className='w-14 h-14 bg-white rounded-xl  relative bottom-12 right-80 shadow-xl'
          ></motion.div>
        </div>
        <div className='w-1/2 flex gap-2 items-center justify-end'>
          <motion.div
            initial={{ opacity: 0, x: -200, y: 50, rotate: -30 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
            transition={{
              duration: 1,
              ease: 'easeOut',
              type: 'spring',
              stiffness: 80
            }}
            className='w-20 h-20 bg-white rounded-xl relative bottom-56 shadow-xl'
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: 'easeOut',
              type: 'tween'
            }}
            className='w-14 h-14 bg-white rounded-xl relative bottom-24 left-36 shadow-xl'
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: [200, -20, 10, 0] // efek bounce manual
            }}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: 'easeInOut'
            }}
            className='w-28 h-28 bg-white rounded-xl relative top-14 right-12 shadow-xl'
          ></motion.div>
          {/* Zoom masuk sambil goyang ke kiri-kanan */}
          <motion.div
            initial={{ opacity: 0, scale: 0, x: -100 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [0, 20, -15, 10, 0] // efek osilasi
            }}
            transition={{
              duration: 1.2,
              delay: 0.6,
              ease: 'easeOut'
            }}
            className='w-16 h-16 bg-white rounded-xl relative top-64 right-56 shadow-xl'
          ></motion.div>
        </div>
      </div>
      {/* Decorative circle text (bottom right) */}
      {/* <div className='absolute bottom-8 right-8 hidden md:block'>
    <div className='rotate-[25deg] text-xs tracking-[0.4em] text-gray-300 uppercase'>
      Transform your business
    </div>
  </div> */}
    </section>
  )
}

export default HeroLayout
