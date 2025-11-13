/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import  { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scenes = [
  {
    id: 1,
    title: 'Tentang Delta',
    image: '/assets/about_us.png',
    text: [
      'Delta adalah perusahaan yang bergerak di bidang inovasi teknologi industri, berfokus pada efisiensi dan keberlanjutan.',
      'Kami berkomitmen menghadirkan solusi yang memadukan teknologi modern dan kebutuhan bisnis masa depan.'
    ],
    imagePosition: 'left'
  },
  {
    id: 2,
    title: 'Visi Kami',
    image: '/assets/vision.png',
    text: [
      'Menjadi pemimpin global dalam solusi industri cerdas yang ramah lingkungan, menginspirasi perubahan menuju masa depan berkelanjutan.',
      'Kami percaya inovasi harus memberi dampak positif, tidak hanya untuk industri, tapi juga bagi masyarakat dan planet ini.'
    ],
    imagePosition: 'right'
  },
  {
    id: 3,
    title: 'Misi Kami',
    image: '/assets/mission.png',
    text: [
      'Mendorong kolaborasi lintas disiplin untuk menciptakan teknologi yang berdampak nyata.',
      'Membangun ekosistem inovasi yang memperkuat industri lokal dan memberdayakan generasi masa depan.'
    ],
    imagePosition: 'left'
  }
]

const AboutHijackScroll = () => {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const handleWheel = (e:any) => {
      if (isAnimating) return
      setIsAnimating(true)

      if (e.deltaY > 0 && sceneIndex < scenes.length - 1) {
        setSceneIndex(prev => prev + 1)
      } else if (e.deltaY < 0 && sceneIndex > 0) {
        setSceneIndex(prev => prev - 1)
      }

      setTimeout(() => setIsAnimating(false), 1200)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [sceneIndex, isAnimating])

  const current = scenes[sceneIndex]

  return (
    <div className='relative w-full h-screen overflow-hidden bg-[#fcfaf4]'>
      {/* === Progress bar di atas === */}
      <div className='absolute top-0 left-0 w-full h-[2px] bg-gray-200 z-50'>
        <motion.div
          className='h-full bg-black origin-left'
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (sceneIndex + 1) / scenes.length }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </div>

      {/* === Konten scene === */}
      <AnimatePresence mode='wait'>
        <motion.section
          key={current.id}
          initial={{
            opacity: 0,
            x: current.imagePosition === 'left' ? 200 : -200
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: current.imagePosition === 'left' ? -200 : 200
          }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full flex justify-between items-center px-24'
        >
          {current.imagePosition === 'left' ? (
            <>
              {/* Gambar kiri */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-1/2 flex justify-center items-center'
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className='w-full h-[80%] object-cover rounded-2xl'
                />
              </motion.div>

              {/* Text kanan */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-1/2 flex flex-col justify-center items-center gap-6 text-center'
              >
                <h2 className='text-5xl font-semibold'>{current.title}</h2>
                {current.text.map((t, i) => (
                  <p key={i} className='text-lg w-3/4'>
                    {t}
                  </p>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              {/* Text kiri */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-1/2 flex flex-col justify-center items-center gap-6 text-center'
              >
                <h2 className='text-5xl font-semibold'>{current.title}</h2>
                {current.text.map((t, i) => (
                  <p key={i} className='text-lg w-3/4'>
                    {t}
                  </p>
                ))}
              </motion.div>

              {/* Gambar kanan */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                className='w-1/2 flex justify-center items-center'
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className='w-full h-[80%] object-cover rounded-2xl'
                />
              </motion.div>
            </>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  )
}

export default AboutHijackScroll
