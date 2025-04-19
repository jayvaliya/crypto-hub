import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='relative overflow-hidden bg-neutral-900 py-20 sm:py-32'>
      {/* Background decorative elements */}
      {/* <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-teal-900/20 blur-3xl'></div>
      </div> */}

      {/* Floating Crypto Icons */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* Bitcoin */}
        <div className='hidden lg:block absolute top-24 left-80 animate-float'>
          <img
            src='https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400'
            alt='Bitcoin'
            className='w-16 h-16'
          />
        </div>

        {/* Ethereum */}
        <div className='hidden lg:block absolute bottom-20 right-44 animate-float-delayed'>
          <img
            src='https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628'
            alt='Ethereum'
            className='w-20 h-20'
          />
        </div>

        {/* Solana */}
        <div className='hidden lg:block absolute top-40 right-32  animate-float-slow'>
          <img
            src='https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756'
            alt='Solana'
            className='w-14 h-14'
          />
        </div>

        {/* USDT */}
        <div className='hidden lg:block absolute bottom-24 left-28 animate-float-very-slow'>
          <img
            src='https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661'
            alt='USDT'
            className='w-12 h-12'
          />
        </div>

        {/* Avalanche */}
        <div className='hidden lg:block absolute top-1/3 left-20  animate-float-medium'>
          <img
            src='https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369'
            alt='Avalanche'
            className='w-10 h-10'
          />
        </div>
      </div>

      <div className='relative mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-4xl text-center'>
          <h1 className='bg-gradient-to-r from-teal-300 to--500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl'>
            <span className='block text-center h-24'>Crypto Hub</span>
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300 sm:text-xl'>
            Your complete cryptocurrency dashboard for real-time prices,
            detailed analytics, and market insights.
          </p>

          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              to='/Resources'
              className='text-base font-semibold text-gray-300 hover:text-teal-400 transition-colors'>
              Learn More <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
