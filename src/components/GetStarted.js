import React from 'react';
import getStarted from "../images/getStarted.svg"

const GetStarted = () => {
  return (
    <div className='flex flex-col items-center px-12 pt-8 pb-12 bg-blue-600 rounded-lg max-md:px-5 max-md:max-w-full max-w-[400px]'>
      <div className='text-2xl font-bold leading-10 text-center text-white w-[268px]'>
        Get Started with KoinX for FREE
      </div>
      <div className='self-stretch mt-3.5 text-sm font-medium leading-6 text-center text-zinc-100'>
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </div>
      <img
        loading='lazy'
        src={getStarted}
        className='mt-10 max-w-full aspect-[1.08] w-[178px]'
      />
      <button className='flex flex-col justify-center px-6 py-2.5 mt-5 max-w-full text-base font-semibold leading-7 whitespace-nowrap bg-white rounded-lg text-slate-900 w-[238px] max-md:px-5'>
        <div className='flex gap-1.5 justify-between'>
          <div className='grow'>Get Started for FREE</div>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/1040280e6360599acf0920e3b4ac40129a6b5dfc3e3e8e8af1eeb5afcf6ecb3a?apiKey=20b0c988497b44bab879ebfd0a34dc50&'
            className='my-auto w-5 aspect-square'
          />
        </div>
      </button>
    </div>
  );
};

export default GetStarted;
