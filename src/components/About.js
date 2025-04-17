import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { AboutCaching } from '../store';

const allowedTags = [
  'A',
  'BR',
  'P',
  'STRONG',
  'B',
  'I',
  'EM',
  'UL',
  'LI',
  'H1',
  'H2',
  'H3',
  'H4',
];
const allowedAttributes = ['href', 'target', 'rel'];

function sanitize(htmlString) {
  if (!htmlString) return '';
  const div = document.createElement('div');
  div.innerHTML = htmlString;

  function clean(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent.trim() ? node : null;
    }
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (!allowedTags.includes(node.tagName)) {
        const p = document.createElement('p');
        while (node.firstChild) p.appendChild(node.firstChild);
        return p;
      }
      // Clean attributes
      [...node.attributes].forEach((attr) => {
        if (!allowedAttributes.includes(attr.name))
          node.removeAttribute(attr.name);
      });
    }
    [...node.childNodes].forEach((child) => {
      const cleaned = clean(child);
      if (cleaned !== child) {
        if (cleaned) node.replaceChild(cleaned, child);
        else node.removeChild(child);
      }
    });
    return node;
  }
  clean(div);
  return div.innerHTML;
}

const About = ({ data }) => {
  const htmlRef = useRef();
  const [cache, setCache] = useRecoilState(AboutCaching);
  const [expanded, setExpanded] = useState(false);
  const [desc, setDesc] = useState('');

  // Cache and set description
  useEffect(() => {
    if (!data?.id || !data?.description?.en) return;
    const cacheKey = data.id;
    if (cache[cacheKey]) setDesc(cache[cacheKey]);
    else {
      setDesc(data.description.en);
      setCache((prev) => ({ ...prev, [cacheKey]: data.description.en }));
    }
  }, [data, cache, setCache]);

  // Inject sanitized HTML
  useEffect(() => {
    if (htmlRef.current && desc) {
      htmlRef.current.innerHTML = sanitize(desc);
      // Style links
      htmlRef.current.querySelectorAll('a').forEach((link) => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.style.color = '#2dd4bf';
        link.style.textDecoration = 'none';
        link.addEventListener('mouseenter', () => {
          link.style.color = '#5eead4';
          link.style.textDecoration = 'underline';
        });
        link.addEventListener('mouseleave', () => {
          link.style.color = '#2dd4bf';
          link.style.textDecoration = 'none';
        });
      });
      // Style paragraphs
      htmlRef.current.querySelectorAll('p').forEach((p) => {
        p.style.marginBottom = '1rem';
        p.style.color = '#d1d5db';
        p.style.lineHeight = '1.6';
      });
    }
  }, [desc]);

  // Fallback for plain text (if no HTML tags are present)
  const isPlainText = desc && !/<[a-z][\s\S]*>/i.test(desc);

  return (
    <div className='bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 p-6 mb-6'>
      {desc ? (
        <>
          <h2 className='text-2xl font-bold text-white mb-4'>
            About {data.name}
          </h2>
          <div className={expanded ? '' : 'relative'}>
            <div
              className={`${expanded ? '' : 'max-h-64 overflow-hidden'}`}
              style={{ lineHeight: '1.6' }}>
              {isPlainText ? (
                <p className='text-gray-300 whitespace-pre-line'>{desc}</p>
              ) : (
                <div ref={htmlRef} className='text-gray-300' />
              )}
            </div>
            {!expanded && (
              <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-800 to-transparent pointer-events-none' />
            )}
          </div>
          <button
            onClick={() => setExpanded((e) => !e)}
            className='mt-4 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors text-sm flex items-center gap-2 mx-auto focus:outline-none focus:ring-2 focus:ring-teal-400'>
            {expanded ? (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 15l7-7 7 7'
                  />
                </svg>
                Show Less
              </>
            ) : (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
                Read More
              </>
            )}
          </button>
        </>
      ) : (
        <div className='flex justify-center items-center h-40'>
          <div className='w-8 h-8 border-t-2 border-teal-400 border-solid rounded-full animate-spin'></div>
          <span className='ml-3 text-teal-400'>Loading description...</span>
        </div>
      )}
    </div>
  );
};

export default About;
