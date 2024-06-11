import React, { useState } from 'react';
import Candlestick from './Candlestick';
import LineChert from './LineChert';

export default function Chart({ data, id }) {
  const [days, setDays] = useState('14');
  const [graphType, setGraphType] = useState('line');
  const daysList = ['1', '7', '14', '30', '90', '180', '365', 'max'];
  const name = data.name;
  const symbol = data.symbol;
  const change24h = data.market_data?.price_change_percentage_24h;
  const currentPriceUSD = data.market_data?.current_price.usd;
  const currentPriceINR = data.market_data?.current_price.inr;
  var imgLink;
  if (data && data.image && data.image.small) {
    imgLink = data.image.small;
    console.log('Current Price in USD:', currentPriceUSD);
  }
  return (
    <div className='container mx-auto'>
      <div className='bg-zinc-800 rounded-lg p-6'>
        <div className='flex flex-col md:flex-row md:items-center justify-between mb-4'>
          <div className='flex flex-col md:flex-row md:items-center'>
            <img loading='lazy' src={imgLink} className='w-12 h-12' alt='img' />
            <div className='flex flex-col justify-center md:pl-2 mt-1'>
              <div className='flex gap-0'>
                <div className='text-xl font-semibold'>
                  {name}
                </div>
                <div className='text-base'>{symbol}</div>
              </div>
            </div>
          </div>
          <div className='text-sm font-bold rounded-lg border bg-slate-400 border-transparent p-2'>
            Rank #{data.market_cap_rank}
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-4 md:max-w-full'>
          <div className='flex flex-col'>
            <div className='text-2xl font-semibold'>{`$${currentPriceUSD}`}</div>
            <div className='text-base font-medium'>{`₹${currentPriceINR}`}</div>
          </div>
          <div className='flex flex-col items-start self-start mt-2 text-sm font-medium'>
            <div className='flex gap-2'>
              <div
                className={`p-2 text-base ${
                  change24h >= 0
                    ? 'text-green-600 bg-green-100'
                    : 'text-red-600 bg-red-100'
                } rounded`}>
                {change24h}%
              </div>
              <div className='text-sm'>(24H)</div>
            </div>
          </div>
        </div>
        <div className='mt-6 max-w-full h-px bg-zinc-200 md:mr-2.5' />
        <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
          <div className='font-bold text-base'>
            {`${name} Price Chart (USD)`}
          </div>
          <div className='flex items-center gap-2 text-sm  mx-2'>
            <span>Graph:</span>
            <button
              onClick={() => setGraphType('line')}
              className={`${
                graphType === 'line'
                  ? 'text-blue-700 bg-indigo-100 rounded-full p-2'
                  : 'text-xs leading-5'
              }`}>
              Line
            </button>
            <button
              onClick={() => setGraphType('candlestick')}
              className={`${
                graphType === 'candlestick'
                  ? 'text-blue-700 bg-indigo-100 rounded-full p-2'
                  : 'text-xs leading-5'
              }`}>
              Candlestick
            </button>
          </div>
          <div className='flex gap-2 items-center text-sm '>
            <span>Days:</span>
            {daysList.map((item) => (
              <button
                key={item}
                className={`${
                  item === days
                    ? 'p-2 text-blue-700 bg-indigo-100 rounded-full'
                    : 'text-xs leading-5'
                }`}
                onClick={() => {
                  setDays(item);
                  console.log(days);
                }}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className='mt-10 w-full aspect-[2.13] md:max-w-full'>
          {graphType === 'candlestick' ? (
            <Candlestick id={id} days={days} />
          ) : (
            <LineChert id={id} days={days} />
          )}
        </div>
      </div>
    </div>
  );
}
