/* eslint-disable @typescript-eslint/no-explicit-any */
// components/GalleryMasonry.jsx
// import React from 'react'
import Masonry from 'react-masonry-css'

const GalleryMasonry = ({ images }:any) => {
  // breakpoints → jumlah kolom sesuai ukuran layar
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className='flex w-auto gap-4'
      columnClassName='bg-clip-padding'
    >
      {images.map((src:string, i:number) => (
        <div key={i} className='mb-4 overflow-hidden rounded-lg shadow-md'>
          <img
            src={src}
            alt={`Gallery ${i}`}
            className='w-full object-cover hover:scale-[1.03] transition-transform duration-300'
          />
        </div>
      ))}
    </Masonry>
  )
}

export default GalleryMasonry
