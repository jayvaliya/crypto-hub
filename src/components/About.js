import React, { useState, useEffect, useRef } from 'react';

const About = ({ data }) => {
  const htmlRef = useRef();
  console.log("in",data);

  useEffect(() => {
    if (!data) {
      return; 
    }

    const { description } = data;
    const en = description && description.en;
    if (htmlRef.current) {
      htmlRef.current.innerHTML = en;
    }
  }, [data]);

  return (<>
    {data && data.description && data.description.en && (
      <div className='flex flex-col px-6 pt-7 mt-5 text-lg font-bold leading-5 bg-white rounded-lg text-slate-900 max-md:px-5 max-md:max-w-full'>
        <div className='text-2xl font-semibold text-slate-900 max-md:max-w-full'>
          About {data.name}
        </div>
        <div className='mt-8 mb-4 max-md:max-w-full'>What is {data.name}?</div>
        <div ref={htmlRef} className='px-3 py-6 font-normal'></div>
      </div>
    )}
  </>
  );
};

export default About;
