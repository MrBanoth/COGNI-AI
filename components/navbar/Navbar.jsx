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
        <div className='mobile-menu-head'>
          <div className='current-menu-title'>{menuTitle}</div>
          <div onClick={handleMenu} className='mobile-menu-close'>
            ×
          </div>
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
              Our Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/services' className='nav-link-item' onClick={handleMenu}>
              Our Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/careers' className='nav-link-item' onClick={handleMenu}>
              Careers
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
