import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/img/mainlogo.svg'; // Using the main logo from assets

const Footer_01 = () => {
  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-colorLinenRuffle lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top Banner */}
      <div className='py-12 md:py-16 lg:py-20'>
        <div className='global-container'>
          <div className='flex flex-col items-center justify-center text-center'>
            <h2 className='mb-4 font-dmSans text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black'>
              Cogni AI Solutions INC
            </h2>
            <p className='max-w-3xl mx-auto text-lg text-gray-700'>
              Transforming businesses with innovative artificial intelligence solutions
            </p>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
      </div>
      
      {/* Footer Main Content */}
      <div className='global-container'>
        <div className='grid grid-cols-1 gap-y-10 gap-x-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-12 xl:py-16'>
          {/* Company Info */}
          <div className='flex flex-col gap-y-6'>
            <Link href='/' className='inline-block h-8 w-auto md:h-9 mb-1'>
              <Image 
                src={logo}
                alt='Cogni AI Solutions Logo'
                width={0}
                height={0}
                sizes='100vw'
                className='h-full w-auto max-w-[130px] object-contain object-left transition-all duration-300 hover:opacity-90'
              />
            </Link>
            <p className='text-base md:text-md leading-relaxed'>
              Our mission is to harness the power of AI to solve complex
              business challenges, provide decision-makers with data-driven
              insights, and enhance user experiences across digital platforms.
            </p>
            <div className='flex items-center space-x-4 pt-2'>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-colorOrangyRed hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-colorOrangyRed hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-colorOrangyRed hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 text-gray-700 hover:bg-colorOrangyRed hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-xl font-semibold text-black'>
              Quick Links
            </h4>
            <ul className='flex flex-col gap-y-3'>
              <li>
                <Link
                  href='/'
                  className='text-gray-700 hover:text-colorOrangyRed transition-colors duration-300'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='text-gray-700 hover:text-colorOrangyRed transition-colors duration-300'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-700 hover:text-colorOrangyRed transition-colors duration-300'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='text-gray-700 hover:text-colorOrangyRed transition-colors duration-300'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-xl font-semibold text-black'>
              Contact Us
            </h4>
            <ul className='flex flex-col gap-y-4 text-gray-700'>
              <li className='flex items-start'>
                <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-colorOrangyRed bg-opacity-10 text-colorOrangyRed mr-3 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className='leading-relaxed'>1209 Orange Street,<br />Wilmington, Delaware 19801,<br />USA</span>
              </li>
              <li className='flex items-center'>
                <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-colorOrangyRed bg-opacity-10 text-colorOrangyRed mr-3 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a href="mailto:info@cogni-ai.com" className="hover:text-colorOrangyRed transition-colors duration-300">info@cogni-ai.com</a>
              </li>
              <li className='flex items-center'>
                <span className='inline-flex items-center justify-center h-8 w-8 rounded-full bg-colorOrangyRed bg-opacity-10 text-colorOrangyRed mr-3 flex-shrink-0'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <a href="tel:+1234567890" className="hover:text-colorOrangyRed transition-colors duration-300">+1 (234) 567-890</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className='flex flex-col gap-y-6'>
            <h4 className='text-xl font-semibold text-black'>
              Stay Updated
            </h4>
            <p className='text-gray-700 mb-4'>Subscribe to our newsletter for the latest updates</p>
            <form action='#' method='post' className='w-full'>
              <div className='relative'>
                <input
                  type='email'
                  name='newsletter-email'
                  id='newsletter-email'
                  placeholder='Enter your email'
                  className='h-12 w-full rounded-lg border border-gray-300 px-4 pr-12 outline-none focus:border-black transition-colors duration-300'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-black p-2 text-white transition-colors hover:bg-colorOrangyRed'
                  aria-label="Subscribe"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF]' />
      </div>
      
      {/* Footer Bottom */}
      <div className='global-container'>
        <div className='py-6 md:py-8'>
          <div className='flex flex-col md:flex-row md:justify-between items-center gap-4'>
            <p className='text-center md:text-left text-gray-700'>
              © {new Date().getFullYear()} Cogni AI Solutions INC. All Rights Reserved.
            </p>
            <div className='flex items-center space-x-6'>
              <Link href="/privacy-policy" className="text-sm text-gray-700 hover:text-colorOrangyRed transition-colors duration-300">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-700 hover:text-colorOrangyRed transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Background Shapes */}
      <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px] opacity-70'></div>
      <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px] opacity-70'></div>
    </footer>
  );
};

export default Footer_01;
