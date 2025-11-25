/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link
} from 'react-router-dom'
import './App.css'
import HomePage from './pages/home'
import { useEffect, useState } from 'react'
import Contact from './pages/contact'
import Profile from './pages/profile/page'
import BlogPage from './pages/blog/page'
import PageNews from './pages/berita/page'
import GalleryPage from './pages/gallery/page'
import Unduhan from './pages/unduhan/page'
import BlogDetailPage from './pages/blog/detail/detail'
import Footer from './components/footer'


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
  // indicator/menuRefs removed to keep navbar simple

  const menus = [
    'Beranda',
    'Profile',
    'Blog',
    'Berita',
    'Unduhan',
    'Gallery',
    'Kontak'
  ]
  const menuPaths = [
    '/',
    '/profile',
    '/blog',
    '/berita',
    '/unduhan',
    '/gallery',
    '/contact'
  ]

  const location = useLocation()
  useEffect(() => {
    const idx = menuPaths.findIndex(
      path =>
        location.pathname === path ||
        (path !== '/' && location.pathname.startsWith(path))
    )
    setActiveIndex(idx === -1 ? 0 : idx)
  }, [location.pathname])

  // close mobile menu on navigation
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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
            {/* Desktop menu - simple text links */}
            <div className='hidden md:flex items-center gap-6'>
              {menus.map((menu, index) => (
                <Link
                  to={menuPaths[index]}
                  key={index}
                  className={`relative z-10 px-4 py-1 font-medium transition-colors duration-200 ${
                    activeIndex === index
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {menu}
                </Link>
              ))}
            </div>

            {/* Mobile: burger button */}
            <div className='md:hidden flex items-center'>
              <button
                title='button'
                aria-label='Toggle menu'
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(v => !v)}
                className='relative z-20 p-2 rounded-md hover:bg-gray-100/20'
              >
                {/* simple burger icon */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d={
                      mobileOpen
                        ? 'M6 6L18 18M6 18L18 6'
                        : 'M3 6h18M3 12h18M3 18h18'
                    }
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
              <div className='md:hidden absolute right-4 top-full mt-3 w-52 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg z-30 overflow-hidden'>
                <div className='flex flex-col'>
                  {menus.map((menu, index) => (
                    <Link
                      to={menuPaths[index]}
                      key={index}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium border-b last:border-b-0 ${
                        activeIndex === index
                          ? 'text-blue-600'
                          : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {menu}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/blog'} element={<BlogPage />} />
        <Route path={'/blog/:id'} element={<BlogDetailPage />} />

        <Route path={'/berita'} element={<PageNews />} />
        <Route path={'/unduhan'} element={<Unduhan />} />
        <Route path={'/gallery'} element={<GalleryPage />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </>
  )
}

// Ubah BrowserRouter jadi Router agar useLocation bisa dipakai di App
export default function WrappedApp () {
  return (
    <Router>
      <App />
      <Footer />

    </Router>
  )
}
