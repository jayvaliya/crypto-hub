import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';

const NavigationItem = ({ label, to }) => (
  <li>
    <Link className='text-gray-800 transition hover:text-gray-500' to={to}>
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Crypto Texes', to: '/#' },
    { label: 'Free Tools', to: '/#' },
    { label: 'Resource Center', to: '/#' },
  ];

  return (
    <header className='bg-white shadow-lg'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='md:flex md:items-center md:gap-12'>
            <Link to="/" className='block text-blue-600'>
              <img src={logo} alt='Logo' />
            </Link>
          </div>

          <div className='hidden md:block'>
            <nav aria-label='Global'>
              <ul className='flex items-center gap-6 text-base font-medium '>
                {navigationItems.map((item, index) => (
                  <NavigationItem key={index} {...item} />
                ))}
              </ul>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <div className='sm:flex sm:gap-4 text-base'>
              <div className='hidden sm:flex'>
                <Link
                  className='rounded-md px-5 py-2 font-medium text-white bg-blue-600'
                  to='/signup'>
                  Get Started
                </Link>
              </div>
            </div>

            <div className='block md:hidden'>
              <button
                className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'
                onClick={toggleMobileMenu}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden'>
          <nav aria-label='Global'>
            <ul className='flex flex-col items-center gap-6 text-base font-medium'>
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  label={item.label}
                  to={item.to}
                />
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
