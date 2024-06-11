import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const NavigationItem = ({ label, to }) => (
  <li>
    <Link className='text-white transition hover:text-teal-300 hover:border-b-2 hover:border-teal-300 ' to={to}>
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
    { label: 'Home', to: '/' },
    { label: 'Crypto Texes', to: '/Taxes' },
    { label: 'Resource Center', to: '/Resources' },
  ];

  return (
    <header className='bg-zinc-800 shadow-lg'>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='md:flex md:items-center md:gap-12'>
            <Link to="/" className='flex items-center gap-3'>
              <img className='w-12 h-12' src={logo} alt='Logo' />
              <span className='text-2xl font-semibold'>Crypto Hub</span>
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
            <div className='block md:hidden'>
              <button
                className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-teal-600 hover:shado'
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
