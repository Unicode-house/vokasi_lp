// import React, { useEffect, useRef } from 'react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// const CobaGSAP = () => {
//   const sectionRef = useRef(null)
//   const imageRef = useRef(null)
//   const textRef = useRef(null)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const ctx = gsap.context(() => {
//       // Buat timeline utama untuk animasi transisi 3 tahap
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: '+=300%', // panjang scroll untuk 3 tahap
//           scrub: true,
//           pin: true,
//           markers: true
//         }
//       })

//       // --- Stage 1: Tentang Saya (awal)
//       tl.to({}, { duration: 0.5 }) // delay kecil biar smooth

//       // --- Stage 2: Ganti ke Visi (tukar posisi + ubah teks)
//       tl.to(
//         imageRef.current,
//         { xPercent: 100, opacity: 0, duration: 1 },
//         'swap1'
//       )
//       tl.to(
//         textRef.current,
//         { xPercent: -100, opacity: 0, duration: 1 },
//         'swap1'
//       )

//       tl.set(imageRef.current, { xPercent: -100 })
//       tl.set(textRef.current, { xPercent: 100 })
//       tl.to(imageRef.current, { xPercent: 0, opacity: 1, duration: 1 }, 'swap2')
//       tl.to(textRef.current, { xPercent: 0, opacity: 1, duration: 1 }, 'swap2')
//       tl.call(() => {
//         textRef.current.querySelector('h2').innerText = 'Visi'
//         textRef.current.querySelector('p').innerText =
//           'Menjadi pribadi yang membawa dampak positif dan inovatif ✨'
//       })

//       // --- Stage 3: Ganti ke Misi (tukar lagi posisi)
//       tl.to(
//         imageRef.current,
//         { xPercent: 100, opacity: 0, duration: 1 },
//         'swap3'
//       )
//       tl.to(
//         textRef.current,
//         { xPercent: -100, opacity: 0, duration: 1 },
//         'swap3'
//       )

//       tl.set(imageRef.current, { xPercent: -100 })
//       tl.set(textRef.current, { xPercent: 100 })
//       tl.to(imageRef.current, { xPercent: 0, opacity: 1, duration: 1 }, 'swap4')
//       tl.to(textRef.current, { xPercent: 0, opacity: 1, duration: 1 }, 'swap4')
//       tl.call(() => {
//         textRef.current.querySelector('h2').innerText = 'Misi'
//         textRef.current.querySelector('p').innerText =
//           'Terus belajar, berbagi, dan berkembang bersama orang lain 🚀'
//       })
//     })

//     return () => ctx.revert()
//   }, [])

//   return (
//     <section className='w-full bg-gray-100 text-black'>
//       {/* Section sebelum animasi */}
//       <div className='h-screen flex items-center justify-center bg-gray-300'>
//         <h1 className='text-3xl font-bold'>Scroll ke bawah 👇</h1>
//       </div>

//       {/* Section animasi */}
//       <section
//         ref={sectionRef}
//         className='relative w-full h-screen flex items-center justify-center overflow-hidden bg-white'
//       >
//         {/* Foto */}
//         <div
//           ref={imageRef}
//           className='w-1/2 flex items-center justify-center transition-all'
//         >
//           <img
//             src='https://placekitten.com/400/400'
//             alt='Foto'
//             className='rounded-xl shadow-lg'
//           />
//         </div>

//         {/* Teks */}
//         <div
//           ref={textRef}
//           className='w-1/2 flex flex-col items-center justify-center p-8 text-center'
//         >
//           <h2 className='text-4xl font-bold mb-4'>Tentang Saya</h2>
//           <p className='text-lg max-w-md'>
//             Saya seorang pengembang yang suka belajar dan bereksperimen 🧠
//           </p>
//         </div>
//       </section>

//       {/* Section setelah animasi */}
//       <div className='h-screen flex items-center justify-center bg-gray-300'>
//         <h1 className='text-3xl font-bold'>Akhir dari animasi 🎉</h1>
//       </div>
//     </section>
//   )
// }

// export default CobaGSAP
