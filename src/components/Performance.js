import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { PerformanceCaching } from '../store';

function Performance({ data }) {
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [current, setCurrent] = useState(null);
  const [low52w, setLow52w] = useState(null);
  const [high52w, setHigh52w] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cache, setCache] = useRecoilState(PerformanceCaching);

  const fetchWithRetry = useCallback(async (url, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay));
          return fetchWithRetry(url, retries - 1, delay * 2);
        }
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      if (retries > 0) {
        await new Promise((resolve) => setTimeout(resolve, delay));
        return fetchWithRetry(url, retries - 1, delay * 2);
      }
      throw error;
    }
  }, []);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const cacheKey = `${data.id}-1d`;

        if (cache[cacheKey]) {
          const cachedData = cache[cacheKey];
          setLow(cachedData.low);
          setHigh(cachedData.high);
          setCurrent(cachedData.current);
          setLow52w(cachedData.low52w);
          setHigh52w(cachedData.high52w);
          setLoading(false);
          return;
        }

        const marketData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=1`
        );

        if (!marketData.prices || marketData.prices.length === 0) {
          throw new Error('Market data is empty or invalid');
        }

        const prices = marketData.prices.map((price) => price[1]);
        const low = Math.min(...prices);
        const high = Math.max(...prices);

        const currentData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}?localization=false&tickers=false&market_data=true`
        );

        if (
          !currentData.market_data ||
          !currentData.market_data.current_price
        ) {
          throw new Error('Current data is empty or invalid');
        }

        const current = currentData.market_data.current_price.usd;

        const yearMarketData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=365`
        );

        if (!yearMarketData.prices || yearMarketData.prices.length === 0) {
          throw new Error('52-week market data is empty or invalid');
        }

        const yearPrices = yearMarketData.prices.map((price) => price[1]);
        const low52w = Math.min(...yearPrices);
        const high52w = Math.max(...yearPrices);

        const newData = {
          low,
          high,
          current,
          low52w,
          high52w,
        };

        setCache((prevCache) => ({ ...prevCache, [cacheKey]: newData }));

        setLow(low);
        setHigh(high);
        setCurrent(current);
        setLow52w(low52w);
        setHigh52w(high52w);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    if (data.id) {
      fetchMarketData();
    }
  }, [data.id, fetchWithRetry, cache, setCache]);

  if (loading) {
    return (
      <div className='bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 p-6 mb-6'>
        <h2 className='text-2xl font-bold text-white mb-4'>Performance</h2>
        <div className='flex justify-center items-center h-40'>
          <div className='w-8 h-8 border-t-2 border-teal-400 border-solid rounded-full animate-spin'></div>
          <span className='ml-3 text-teal-400'>Loading price data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 p-6 mb-6'>
        <h2 className='text-2xl font-bold text-white mb-4'>Performance</h2>
        <div className='bg-red-500/20 text-white p-4 rounded-lg border border-red-500'>
          <p>Error loading performance data: {error}</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price) =>
    Number(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 8,
    });

  const calculatePercentage = (low, high, current) =>
    ((current - low) / (high - low)) * 100;

  const percentage24h = calculatePercentage(low, high, current);
  const percentage52w = calculatePercentage(low52w, high52w, current);

  return (
    <div className='bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 p-6 mb-6'>
      <h2 className='text-2xl font-bold text-white mb-4'>Performance</h2>
      <div className='space-y-8'>
        <div className='space-y-2'>
          <div className='flex justify-between items-center mb-1'>
            <div>
              <p className='text-gray-400 text-sm'>Today's Low</p>
              <p className='text-white font-medium'>${formatPrice(low)}</p>
            </div>
            <div className='text-right'>
              <p className='text-gray-400 text-sm'>Today's High</p>
              <p className='text-white font-medium'>${formatPrice(high)}</p>
            </div>
          </div>
          <div className='relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'>
            <div
              className='absolute -top-6 transform -translate-x-1/2 flex flex-col items-center'
              style={{ left: `${Math.max(0, Math.min(100, percentage24h))}%` }}>
              <div className='text-xs text-white bg-neutral-700 px-2 py-1 rounded whitespace-nowrap'>
                ${formatPrice(current)}
              </div>
              <div className='w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-neutral-700'></div>
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex justify-between items-center mb-1'>
            <div>
              <p className='text-gray-400 text-sm'>52W Low</p>
              <p className='text-white font-medium'>${formatPrice(low52w)}</p>
            </div>
            <div className='text-right'>
              <p className='text-gray-400 text-sm'>52W High</p>
              <p className='text-white font-medium'>${formatPrice(high52w)}</p>
            </div>
          </div>
          <div className='relative h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full'>
            <div
              className='absolute -top-6 transform -translate-x-1/2 flex flex-col items-center'
              style={{ left: `${Math.max(0, Math.min(100, percentage52w))}%` }}>
              <div className='text-xs text-white bg-neutral-700 px-2 py-1 rounded whitespace-nowrap'>
                ${formatPrice(current)}
              </div>
              <div className='w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-neutral-700'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
