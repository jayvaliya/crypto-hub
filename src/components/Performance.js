import React, { useState, useEffect } from 'react';

function Performance({ data }) {
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'
    )
      .then((response) => response.json())
      .then((data) => {
        setLow(Math.min(...data.prices.map((price) => price[1])));
        setHigh(Math.max(...data.prices.map((price) => price[1])));
        setCurrent(data.market_data.current_price?.usd);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const percentage = low && high ? ((current - low) / (high - low)) * 100 : 0;

  return (
    <div class='Performance Card cardLeft bg-white p-5 rounded-lg my-5'>
      <h1 class='text-2xl font-bold'>Performance</h1>
      <div class='flex flex-col space-y-4'>
        <div class='space-x-4'>
          <div class='text-left'>
            <p class='font-semibold'>Today's Low</p>
            <p class='text-green-500'>
              $
              {Number(low).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div class='relative flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 m-2'>
            <div class='absolute left-0 top-0 bottom-0 w-2 bg-black'></div>
            <div class='absolute left-1/2 transform -translate-x-1/2 w-10 h-10 text-center'>
              ▲ ${current}
            </div>
          </div>
          <div class='text-right'>
            <p class='font-semibold'>Today's High</p>
            <p class='text-green-500'>
              $
              {Number(high).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
        <div class='space-x-4'>
          <div class='text-left'>
            <p class='font-semibold'>52W Low</p>
            <p class='text-green-500'>
              $
              {Number(low).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
          <div class='flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 m-2'></div>
          <div class='text-right'>
            <p class='font-semibold'>52W High</p>
            <p class='text-green-500'>
              $
              {Number(high).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
