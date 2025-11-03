// import { Star } from 'lucide-react'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialsSection () {
  const fadeUp = {
    hidden: {  },
    visible: { transition: {
      staggerChildren: 0.15, // jarak antar animasi biar halus
    },
    }
  }

  return (
    <section className='bg-[#fdfaf6] pb-20'>
      <div className='container mx-auto text-center'>
        {/* Gallery Section */}
        <div className='grid grid-cols-5 gap-4 justify-center mb-24'>
          {/* Kolom 1 */}
          <div className='flex flex-col gap-4 relative top-96'>
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src='https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg'
              alt=''
              className='rounded-3xl w-full h-56 object-cover shadow-md hover:scale-105 transition-transform'
            />
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              src='https://i.pinimg.com/736x/97/56/cd/9756cdb3e2ac84e2e994e38e5bf8ef4c.jpg'
              alt=''
              className='rounded-3xl w-full h-40 object-cover shadow-md hover:scale-105 transition-transform'
            />
          </div>

          {/* Kolom 2 */}
          <div className='flex flex-col gap-4 mt-12 relative top-36'>
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src='https://i.pinimg.com/736x/e7/e3/b2/e7e3b2139e2b820701b1d927c62a3bf3.jpg'
              alt=''
              className='rounded-3xl w-full h-64 object-cover shadow-md hover:scale-105 transition-transform'
            />
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2'
              alt=''
              className='rounded-3xl w-full h-48 object-cover shadow-md hover:scale-105 transition-transform'
            />
          </div>

          {/* Kolom 3 */}
          <div className='flex flex-col gap-4 relative top-12'>
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1556761175-5973dc0f32e7'
              alt=''
              className='rounded-[2rem] w-full h-80 object-cover shadow-md hover:scale-105 transition-transform'
            />
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1573497019418-b400bb3ab074'
              alt=''
              className='rounded-[2rem] w-full h-80 object-cover shadow-md hover:scale-105 transition-transform'
            />
          </div>

          {/* Kolom 4 */}
          <div className='flex flex-col gap-4 mt-12 relative top-36'>
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1590608897129-79da98d15971'
              alt=''
              className='rounded-3xl w-full h-56 object-cover shadow-md hover:scale-105 transition-transform'
            />
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
              alt=''
              className='rounded-3xl w-full h-40 object-cover shadow-md hover:scale-105 transition-transform'
            />
          </div>

          {/* Kolom 5 */}
          <div className='flex flex-col gap-4 relative top-96'>
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d'
              alt=''
              className='rounded-3xl w-full h-64 object-cover shadow-md hover:scale-105 transition-transform'
            />
            <motion.img
              variants={fadeUp}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              src='https://images.unsplash.com/photo-1573164713347-df1e9f5b2cbb'
              alt=''
              className='rounded-3xl w-full h-48 object-cover shadow-md hover:scale-105 transition-transform'
            />
          </div>
        </div>
        {/* Title Section */}
        <motion.div
          className='text-center mb-20'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          variants={{
            hidden: {},
            visible: {}
          }}
        >
          {/* Tombol */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className='px-4 py-1 mb-4 text-sm font-medium text-white bg-[#8054f3] rounded-full shadow-sm'
          >
            Testimonials
          </motion.button>

          {/* Judul */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className='text-5xl font-bold text-gray-900 mb-4'
          >
            Cerita dari Komunitas Kami
          </motion.h2>

          {/* Subjudul */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='text-gray-500 mb-16 text-3xl'
          >
            Dikenal dan dipercaya oleh para relawan, mitra, dan masyarakat dari berbagai bidang.
          </motion.p>
        </motion.div>
        {/* Testimonials */}
        <div className='grid md:grid-cols-3 gap-4 w-full mx-auto'>
          <div className='px-4 py-2 rounded-2xl text-left transition-shadow duration-300'>
            <div className='flex text-yellow-400 mb-4 gap-2'>
              {/* {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill='currentColor' />
                ))} */}
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
            </div>
            <p className='text-gray-700 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia, dolores, accusamus temporibus ullam ipsam modi minus
              quia officia deleniti illo voluptate, eos nostrum nihil sapiente
              corrupti ad obcaecati quam.
            </p>
            <div className='flex items-center gap-4'>
              <img
                src={''}
                alt={''}
                className='w-10 bg-red-500 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-900'>Ahmad Sahroni</p>
                <p className='text-xs text-gray-500 '>Anggota DPR RI</p>
              </div>
            </div>
          </div>
          <div className='px-4 py-2 rounded-2xl text-left transition-shadow duration-300'>
            <div className='flex text-yellow-400 mb-4 gap-2'>
              {/* {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill='currentColor' />
                ))} */}
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
            </div>
            <p className='text-gray-700 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia, dolores, accusamus temporibus ullam ipsam modi minus
              quia officia deleniti illo voluptate, eos nostrum nihil sapiente
              corrupti ad obcaecati quam.
            </p>
            <div className='flex items-center gap-4'>
              <img
                src={''}
                alt={''}
                className='w-10 bg-red-500 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-900'>Ahmad Sahroni</p>
                <p className='text-xs text-gray-500 '>Anggota DPR RI</p>
              </div>
            </div>
          </div>

          <div className='px-4 py-2 rounded-2xl text-left transition-shadow duration-300'>
            <div className='flex text-yellow-400 mb-4 gap-2'>
              {/* {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill='currentColor' />
                ))} */}
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
              <Star size={18} fill='currentColor' />
            </div>
            <p className='text-gray-700 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              mollitia, dolores, accusamus temporibus ullam ipsam modi minus
              quia officia deleniti illo voluptate, eos nostrum nihil sapiente
              corrupti ad obcaecati quam.
            </p>
            <div className='flex items-center gap-4'>
              <img
                src={''}
                alt={''}
                className='w-10 bg-red-500 h-10 rounded-full object-cover'
              />
              <div>
                <p className='font-semibold text-gray-900'>Ahmad Sahroni</p>
                <p className='text-xs text-gray-500 '>Anggota DPR RI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
