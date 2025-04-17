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
  let imgLink = data?.image?.small || '';

  return (
    <div className='bg-zinc-800 rounded-xl shadow-lg border border-zinc-700 p-6 mb-6'>
      <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
        <div className='flex items-center'>
          <img
            loading='lazy'
            src={imgLink}
            className='w-12 h-12 rounded-full shadow-md'
            alt={`${name} logo`}
          />
          <div className='ml-4'>
            <div className='flex items-center gap-2'>
              <h2 className='text-2xl font-bold text-white'>{name}</h2>
              <span className='text-gray-400 text-lg uppercase'>{symbol}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center mt-4 md:mt-0'>
          <div className='bg-zinc-700 text-white text-sm font-semibold rounded-lg px-4 py-2 shadow-inner'>
            Rank #{data.market_cap_rank || 'N/A'}
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start gap-4 mb-6'>
        <div className='flex flex-col'>
          <div className='flex items-end gap-2'>
            <div className='text-3xl font-bold text-white'>
              $
              {Number(currentPriceUSD).toLocaleString(undefined, {
                maximumFractionDigits: 8,
              })}
            </div>
            <div
              className={`${
                change24h >= 0
                  ? 'text-green-500 bg-green-500/10'
                  : 'text-red-500 bg-red-500/10'
              } px-3 py-1 rounded-lg font-semibold text-sm`}>
              {change24h >= 0 ? '+' : ''}
              {change24h?.toFixed(2)}%
            </div>
          </div>
          <div className='text-gray-400 mt-1'>
            ₹
            {Number(currentPriceINR).toLocaleString(undefined, {
              maximumFractionDigits: 8,
            })}
          </div>
        </div>
      </div>

      <div className='h-px bg-zinc-700 mb-6' />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-4 mb-6'>
        <div className='font-bold text-lg text-white'>
          {`${name} Price Chart (USD)`}
        </div>

        <div className='flex flex-wrap items-center gap-4 justify-center'>
          <div className='flex items-center gap-2 bg-zinc-700/50 px-3 py-1 rounded-lg'>
            <span className='text-sm text-gray-300'>Graph:</span>
            <button
              onClick={() => setGraphType('line')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                graphType === 'line'
                  ? 'bg-teal-600 text-white font-medium'
                  : 'text-gray-300 hover:bg-zinc-600'
              }`}>
              Line
            </button>
            <button
              onClick={() => setGraphType('candlestick')}
              className={`px-3 py-1 text-sm rounded-md transition-colors ${
                graphType === 'candlestick'
                  ? 'bg-teal-600 text-white font-medium'
                  : 'text-gray-300 hover:bg-zinc-600'
              }`}>
              Candle
            </button>
          </div>

          <div className='flex items-center gap-1 flex-wrap bg-zinc-700/50 px-3 py-1 rounded-lg'>
            <span className='text-sm text-gray-300 mr-1'>Days:</span>
            {daysList.map((item) => (
              <button
                key={item}
                className={`px-2 py-1 text-xs rounded-md transition-colors ${
                  item === days
                    ? 'bg-teal-600 text-white font-medium'
                    : 'text-gray-300 hover:bg-zinc-600'
                }`}
                onClick={() => setDays(item)}>
                {item === 'max' ? 'Max' : item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full aspect-[1.8] md:aspect-[2.13]'>
        {graphType === 'candlestick' ? (
          <Candlestick id={id} days={days} />
        ) : (
          <LineChert id={id} days={days} />
        )}
      </div>
    </div>
  );
}
