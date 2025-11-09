/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import { useEffect, useRef, useState } from 'react'
import Contact from './pages/contact'
import PojokDakwahPage from './pages/pojok-dakwah/page' // pastikan file ini ada
import Profile from './pages/profile/page'
import BlogPage from './pages/blog/page'
import PageNews from './pages/berita/page'

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

  const menus = ['Beranda', 'Profile', 'Blog', 'Berita', 'Unduhan', 'Gallery', 'Kontak']
  const menuPaths = ['/', '/profile', '/blog', '/berita', '/unduhan', '/gallery', '/contact']

  const location = useLocation()
  useEffect(() => {
    const idx = menuPaths.findIndex(path =>
      location.pathname === path ||
      (path !== '/' && location.pathname.startsWith(path))
    )
    setActiveIndex(idx === -1 ? 0 : idx)
  }, [location.pathname])

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
    <>
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
                href={menuPaths[index]}
                key={index}
                // ref={el => (menuRefs.current[index] = el)}
                className={`relative z-10 px-4 py-1 font-medium transition-all duration-200 ${
                  activeIndex === index
                    ? 'text-blue-600'
                    : 'text-gray-300 hover:text-blue-600'
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
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/berita'} element={<PageNews />} />
        <Route path={'/unduhan'} element={<PojokDakwahPage />} />
        <Route path={'/gallery'} element={<PojokDakwahPage />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </>
  )
}

// Ubah BrowserRouter jadi Router agar useLocation bisa dipakai di App
export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  )
}
