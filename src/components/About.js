import React, { useEffect, useRef, useState } from 'react';

const About = ({ data }) => {
  const htmlRef = useRef();
  const [en, setEn] = useState('');

  useEffect(() => {
    if (!data) {
      return;
    }

    const { description } = data;
    setEn(description && description.en);
  }, [data]);

  useEffect(() => {
    if (htmlRef.current && en) {
      htmlRef.current.innerHTML = sanitize(en);
    }
  }, [en]);

  const sanitize = (htmlString) => {
    const div = document.createElement('div');
    div.innerHTML = htmlString;

    // Allow only <a> tags with href attribute and <br> tags
    const allowedTags = ['A', 'BR'];
    const allowedAttributes = ['href'];

    const cleanNodes = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent.trim() ? node : null;
      }
      if (allowedTags.includes(node.tagName)) {
        const attributes = Array.from(node.attributes);
        for (const attr of attributes) {
          if (!allowedAttributes.includes(attr.name)) {
            node.removeAttribute(attr.name);
          }
        }
        node.childNodes.forEach(child => cleanNodes(child));
        return node;
      }
      return null;
    };

    Array.from(div.childNodes).forEach(node => {
      const cleanNode = cleanNodes(node);
      if (!cleanNode) {
        div.removeChild(node);
      }
    });

    return div.innerHTML;
  };

  return (
    <div className='flex flex-col px-6 pt-7 mt-5 text-lg font-bold leading-5 bg-zinc-800 rounded-lg text-white max-md:px-5 max-md:max-w-full'>
      {data && data.description && data.description.en ? (
        <>
          <div className='text-2xl font-semibold max-md:max-w-full'>About {data.name}</div>
          <div className='mt-8 mb-4 max-md:max-w-full'>What is {data.name}?</div>
          <div
            ref={htmlRef}
            className='px-3 py-6 font-normal'
            dangerouslySetInnerHTML={{ __html: sanitize(en) }}
          ></div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default About;
