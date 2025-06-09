'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// eslint-disable-next-line react/prop-types
const Navbar = ({ mobileMenu, setMobileMenu, color }) => {
  const [menuTitle] = useState('');

  const handleMenu = () => {
    setMobileMenu(false);
  };

  return (
    <div className='menu-block-wrapper'>
      <div
        onClick={handleMenu}
        className={`menu-overlay ${mobileMenu ? 'active' : ''}`}
      />
      <nav
        className={`menu-block ${mobileMenu ? 'active' : ''}`}
        id='append-menu-header'
      >
        <div className='mobile-menu-head flex items-center justify-between p-4'>
          <Link href='/' className='block h-8 w-auto' onClick={handleMenu}>
            <Image 
              src='/assets/img/mainlogo.svg'
              alt='Cogni AI Solutions'
              width={0}
              height={0}
              sizes='100vw'
              className='h-full w-auto max-w-[130px] object-contain object-left transition-all duration-300 hover:opacity-90'
              priority
            />
          </Link>
          <button onClick={handleMenu} className='mobile-menu-close text-2xl font-light text-gray-700 hover:text-colorOrangyRed transition-colors duration-300'>
            ×
          </button>
        </div>
        <ul className={`site-menu-main ${color || ''}`}>
          <li className='nav-item'>
            <Link href='/' className='nav-link-item' onClick={handleMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about' className='nav-link-item' onClick={handleMenu}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/products' className='nav-link-item' onClick={handleMenu}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/services' className='nav-link-item' onClick={handleMenu}>
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/careers' className='nav-link-item' onClick={handleMenu}>
              Careers
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/contact' className='nav-link-item' onClick={handleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
