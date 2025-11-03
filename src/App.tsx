// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import SaintekPage from './pages/saintek/saintek'
import { useEffect, useRef, useState } from 'react'
import DetailsNews from './pages/saintek/detail/detailNews'
import GalleryMainPage from './layouts/Gallery/page'

function App () {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      console.log('Scroll Y:', scrollY)
      if (scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({})
const menuRefs = useRef<HTMLButtonElement[]>([])

  const menus = ['Beranda', 'Saintek', 'Sosial', 'Kontak']

  useEffect(() => {
    const current = menuRefs.current[activeIndex]
    if (current) {
      const { offsetLeft, offsetWidth } = current
      setIndicatorStyle({
        left: offsetLeft,
        width: offsetWidth
      })
    }
  }, [activeIndex])

  return (
    <BrowserRouter>
      <nav className='w-full fixed h-20 z-[999] flex justify-center items-center'>
        <div
          className={`h-full transition-all flex justify-between items-center relative   ${
            isScrolled
              ? 'w-4/5 h-16 bg-white/30 top-4 rounded-xl shadow-xl backdrop-blur-sm'
              : 'w-full bg-transparent top-0'
          } px-6 py-4`}
        >
          <div className='w-1/3 h-full flex items-center gap-2'>
            <img src='/logos/logo_delta.png' alt='' className='w-12 h-12' />
            <span className='text-2xl font-semibold'>Delta</span>
          </div>
          
          <div className='w-2/3 flex items-center justify-end gap-6 relative'>
            {/* Kotak gradasi di belakang menu */}
            <div
              className='absolute h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out'
              style={{
                ...indicatorStyle,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 0
              }}
            ></div>

            {menus.map((menu, index) => (
              <a
                href={menu === 'Beranda' ? '/' : `/${menu.toLowerCase()}`}
                key={index}
                // ref={el => (menuRefs.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={`relative z-10 px-4 py-1  font-medium transition-all duration-200 ${
                  activeIndex === index
                    ? 'text-black'
                    : 'text-gray-200 hover:text-black'
                }`}
              >
                {menu}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/gallery'} element={<GalleryMainPage/>} />
        <Route path={'/saintek'} element={<SaintekPage />} />
        <Route path={'/saintek/news/:id'} element={<DetailsNews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
