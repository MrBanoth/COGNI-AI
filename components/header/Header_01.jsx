'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoDark from '../logo/LogoDark';

const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header fixed top-0 left-0 right-0 z-50 w-full bg-white py-3 transition-shadow duration-300 border-b border-gray-100'
      id='sticky-menu'
      style={{
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
        backgroundColor: '#ffffff',
        backgroundImage: 'none',
        background: '#ffffff',
      }}
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <LogoDark />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-6'>
            <Link
              href='/contact'
              className='button hidden rounded-[50px] border-black bg-black px-6 py-3 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block'
            >
              Contact Us
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className='mobile-menu-trigger is-black'
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header_01;
