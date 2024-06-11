import React, { useState, useEffect, useCallback } from 'react';

function Performance({ data }) {
  const [low, setLow] = useState(null);
  const [high, setHigh] = useState(null);
  const [current, setCurrent] = useState(null);
  const [low52w, setLow52w] = useState(null);
  const [high52w, setHigh52w] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWithRetry = useCallback(async (url, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          // Too Many Requests - wait and retry
          await new Promise((resolve) => setTimeout(resolve, delay));
          return fetchWithRetry(url, retries - 1, delay * 2); // Exponential backoff
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
        const marketData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=1`
        );

        if (!marketData.prices || marketData.prices.length === 0) {
          throw new Error('Market data is empty or invalid');
        }

        const prices = marketData.prices.map((price) => price[1]);
        setLow(Math.min(...prices));
        setHigh(Math.max(...prices));

        const currentData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}?localization=false&tickers=false&market_data=true`
        );

        if (!currentData.market_data || !currentData.market_data.current_price) {
          throw new Error('Current data is empty or invalid');
        }

        setCurrent(currentData.market_data.current_price.usd);

        const yearMarketData = await fetchWithRetry(
          `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=365`
        );

        if (!yearMarketData.prices || yearMarketData.prices.length === 0) {
          throw new Error('52-week market data is empty or invalid');
        }

        const yearPrices = yearMarketData.prices.map((price) => price[1]);
        setLow52w(Math.min(...yearPrices));
        setHigh52w(Math.max(...yearPrices));

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
  }, [data.id, fetchWithRetry]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const formatPrice = (price) =>
    Number(price).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const calculatePercentage = (low, high, current) =>
    ((current - low) / (high - low)) * 100;

  const percentage24h = calculatePercentage(low, high, current);
  const percentage52w = calculatePercentage(low52w, high52w, current);

  return (
    <div className='Performance Card cardLeft bg-transparent text-white p-5 rounded-lg my-5'>
      <h1 className='text-2xl font-bold'>Performance</h1>
      <div className='flex flex-col space-y-4'>
        <div className='space-x-4'>
          <div className='text-left'>
            <p className='font-semibold'>Today's Low</p>
            <p className='text-green-500'>${formatPrice(low)}</p>
          </div>
          <div className='relative flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 m-2'>
            <div className='absolute left-0 top-0 bottom-0 w-2 bg-black'></div>
            <div
              className='absolute transform -translate-x-1/2 w-10 h-10 text-center'
              style={{ left: `${percentage24h}%` }}
            >
              ▲ ${formatPrice(current)}
            </div>
          </div>
          <div className='text-right'>
            <p className='font-semibold'>Today's High</p>
            <p className='text-green-500'>${formatPrice(high)}</p>
          </div>
        </div>
        <div className='space-x-4'>
          <div className='text-left'>
            <p className='font-semibold'>52W Low</p>
            <p className='text-green-500'>${formatPrice(low52w)}</p>
          </div>
          <div className='relative flex-1 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 m-2'>
            <div className='absolute left-0 top-0 bottom-0 w-2 bg-black'></div>
            <div
              className='absolute transform -translate-x-1/2 w-10 h-10 text-center'
              style={{ left: `${percentage52w}%` }}
            >
              ▲ ${formatPrice(current)}
            </div>
          </div>
          <div className='text-right'>
            <p className='font-semibold'>52W High</p>
            <p className='text-green-500'>${formatPrice(high52w)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
