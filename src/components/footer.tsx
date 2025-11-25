export default function Footer () {
  return (
    <footer className='w-full bg-white border-t border-[#6f50f4]/20 mt-20 py-14 px-10'>
      {/* Top Section */}
      <div className='w-full flex flex-col md:flex-row justify-between gap-10'>
        {/* Left Logo + Text */}
        <div className='md:w-1/3 w-full'>
          <div className='flex items-center gap-3'>
            <img src='/logos/logo_delta.png' alt='' className='w-10 h-10' />
            <h2 className='text-xl font-semibold'>DeltaKv</h2>
          </div>

          <p className='text-gray-600 mt-4'>
            Streamline your business’s financial management with our intuitive,
            scalable SaaS platform.
          </p>
        </div>

        {/* Useful Links */}
        <div className='flex gap-16 w-2/3 justify-center'>
          <div>
            <h3 className='font-semibold mb-3'>Menu Utama</h3>
            <ul className='space-y-2 text-gray-600'>
              <li>
                <a href='/' className='hover:text-gray-800'>
                  Home
                </a>
              </li>
              <li>
                <a href='/profile' className='hover:text-gray-800'>
                  Profile
                </a>
              </li>
              <li>
                <a href='/blog' className='hover:text-gray-800'>
                  Blog
                </a>
              </li>
              <li>
                <a href='/berita' className='hover:text-gray-800'>
                  Berita
                </a>
              </li>
              <li>
                <a href='/unduhan' className='hover:text-gray-800'>
                  Unduhan
                </a>
              </li>
              <li>
                <a href='/gallery' className='hover:text-gray-800'>
                  Gallery
                </a>
              </li>
              <li>
                <a href='/contact' className='hover:text-gray-800'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full mt-14 bg-[#6f50f4]/10 rounded-full py-4 px-6 flex flex-col-reverse md:flex-row justify-between items-center gap-6'>
        <p className='text-gray-600'>Copyright © 2025 delta-kv.com</p>

        {/* Social icons */}
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-full bg-white border flex items-center justify-center text-[#6f50f4] text-lg cursor-pointer'>
            <img src='/icons/fb.png' alt='' />
          </div>
          <div className='w-10 h-10 rounded-full bg-white border flex items-center justify-center text-[#6f50f4] text-lg cursor-pointer'>
            <img src='/icons/ig.png' alt='' />
          </div>
          <div className='w-10 h-10 rounded-full bg-white border flex items-center justify-center text-[#6f50f4] text-lg cursor-pointer'>
            <img src='/icons/x.png' alt='' />
          </div>
        </div>
      </div>
    </footer>
  )
}
