import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';
import WarningBox from './WarningBox';

const NavigationItem = ({ label, to, isActive }) => (
  <li>
    <Link
      className={`transition ${
        isActive
          ? 'text-teal-300 border-b-2 border-teal-300'
          : 'text-white hover:text-teal-300 hover:border-b-2 hover:border-teal-300'
      }`}
      to={to}>
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsScrolled(currentScrollPos > 10);
      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Home', to: '/' },
    { label: 'Crypto Taxes', to: '/Taxes' },
    { label: 'Resource Center', to: '/Resources' },
  ];

  return (
    <>
      <header
        className={`${
          isScrolled
            ? 'bg-neutral-900/80 backdrop-blur-md shadow-lg shadow-black/30'
            : 'bg-neutral-900/70 backdrop-blur-sm'
        } fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          visible ? 'transform-none' : '-translate-y-full'
        }`}>
        <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='md:flex md:items-center md:gap-12'>
              <Link to='/' className='flex items-center gap-3'>
                <img className='w-12 h-12' src={logo} alt='Logo' />
                <span className='text-2xl font-semibold text-white'>
                  Crypto Hub
                </span>
              </Link>
            </div>

            <div className='hidden md:block'>
              <nav aria-label='Global'>
                <ul className='flex items-center gap-6 text-base font-medium'>
                  {navigationItems.map((item, index) => (
                    <NavigationItem
                      key={index}
                      {...item}
                      isActive={activeTab === item.to}
                    />
                  ))}
                </ul>
              </nav>
            </div>

            <div className='flex items-center gap-4'>
              <div className='block md:hidden'>
                <button
                  className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-teal-600 hover:shadow-md'
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
          <div className='md:hidden bg-neutral-800/90 backdrop-blur-md py-4 shadow-lg shadow-black/20'>
            <nav aria-label='Global'>
              <ul className='flex flex-col items-center gap-6 text-base font-medium'>
                {navigationItems.map((item, index) => (
                  <NavigationItem
                    key={index}
                    {...item}
                    isActive={activeTab === item.to}
                  />
                ))}
              </ul>
            </nav>
          </div>
        )}
        <WarningBox />
      </header>

      {/* WarningBox moved outside of header for better visibility */}
      <div className='pt-16'></div>
    </>
  );
};

export default Navbar;
