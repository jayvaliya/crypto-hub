import React from 'react';
import TaxCalculator from '../components/TaxCalculator';
import CryptoTaxInfo from '../components/CryptoTaxInfo';
export default function Tax() {
  return (
    <>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full lg:w-2/3'>
          <CryptoTaxInfo />
        </div>
        <div className='w-full lg:w-[450px] mt-4 sm:mt-0 sm:pt-5'>
          <TaxCalculator />
        </div>
      </div>
    </>
  );
}
