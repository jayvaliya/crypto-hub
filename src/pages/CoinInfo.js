import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import About from '../components/About';
import Performance from '../components/Performance';

const CoinInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false`;

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedData = await fetch(url);
      if (!fetchedData.ok) {
        throw new Error('Network response was not ok');
      }
      const jsondata = await fetchedData.json();
      setData(jsondata);
    } catch (err) {
      setError('Unable to fetch data');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='container mx-auto p-4'>
      <div className='mb-6 mt-4'>
        <Link
          to={'/'}
          className='inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors gap-2 font-medium'>
          {/* Replace heroicon with an inline SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          <span>Back to Coins</span>
        </Link>
        <h1 className='text-3xl font-bold text-white mt-2 capitalize'>{id}</h1>
      </div>

      <div className='flex flex-col xl:flex-row gap-6'>
        <div className='w-full xl:w-2/3'>
          {loading ? (
            <div className='flex justify-center items-center h-60 bg-neutral-800/60 backdrop-blur-sm rounded-xl shadow-lg border border-neutral-700'>
              <div className='animate-pulse flex flex-col items-center'>
                <div className='w-16 h-16 border-t-4 border-teal-400 border-solid rounded-full animate-spin'></div>
                <p className='mt-4 text-teal-400'>Loading coin data...</p>
              </div>
            </div>
          ) : error ? (
            <div className='p-6 bg-red-500/20 text-white rounded-xl border border-red-500'>
              <h3 className='text-xl font-bold mb-2'>Error</h3>
              <p>{error}</p>
            </div>
          ) : (
            <>
              <Chart data={data} id={id} />
              <Performance data={data} />
              <About data={data} />
            </>
          )}
        </div>

        <div className='w-full xl:w-1/3'>
          {!loading && !error && data && (
            <div className='bg-neutral-800 rounded-xl shadow-lg border border-neutral-700 p-6 sticky top-20'>
              <h2 className='text-xl font-bold mb-4 text-white'>
                Coin Statistics
              </h2>

              <div className='space-y-4'>
                {data.market_data && (
                  <>
                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-neutral-700/50 p-4 rounded-lg'>
                        <p className='text-sm text-gray-400'>Market Cap</p>
                        <p className='text-lg font-semibold text-white'>
                          ${data.market_data.market_cap.usd.toLocaleString()}
                        </p>
                      </div>
                      <div className='bg-neutral-700/50 p-4 rounded-lg'>
                        <p className='text-sm text-gray-400'>24h Volume</p>
                        <p className='text-lg font-semibold text-white'>
                          ${data.market_data.total_volume.usd.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div className='bg-neutral-700/50 p-4 rounded-lg'>
                        <p className='text-sm text-gray-400'>
                          Circulating Supply
                        </p>
                        <p className='text-lg font-semibold text-white'>
                          {data.market_data.circulating_supply.toLocaleString()}{' '}
                          {data.symbol.toUpperCase()}
                        </p>
                      </div>
                      <div className='bg-neutral-700/50 p-4 rounded-lg'>
                        <p className='text-sm text-gray-400'>Total Supply</p>
                        <p className='text-lg font-semibold text-white'>
                          {data.market_data.total_supply
                            ? data.market_data.total_supply.toLocaleString()
                            : 'Unlimited'}{' '}
                          {data.symbol.toUpperCase()}
                        </p>
                      </div>
                    </div>

                    <div className='bg-neutral-700/50 p-4 rounded-lg'>
                      <p className='text-sm text-gray-400'>All-Time High</p>
                      <div className='flex justify-between items-end'>
                        <p className='text-lg font-semibold text-white'>
                          ${data.market_data.ath.usd.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm ${
                            data.market_data.ath_change_percentage.usd >= 0
                              ? 'text-green-400'
                              : 'text-red-400'
                          }`}>
                          {data.market_data.ath_change_percentage.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      </div>
                      <p className='text-xs text-gray-400 mt-1'>
                        {new Date(
                          data.market_data.ath_date.usd
                        ).toLocaleDateString()}
                      </p>
                    </div>

                    <div className='bg-neutral-700/50 p-4 rounded-lg'>
                      <p className='text-sm text-gray-400'>All-Time Low</p>
                      <div className='flex justify-between items-end'>
                        <p className='text-lg font-semibold text-white'>
                          ${data.market_data.atl.usd.toLocaleString()}
                        </p>
                        <p
                          className={`text-sm ${
                            data.market_data.atl_change_percentage.usd >= 0
                              ? 'text-green-400'
                              : 'text-red-400'
                          }`}>
                          {data.market_data.atl_change_percentage.usd.toFixed(
                            2
                          )}
                          %
                        </p>
                      </div>
                      <p className='text-xs text-gray-400 mt-1'>
                        {new Date(
                          data.market_data.atl_date.usd
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </>
                )}

                {data.links && (
                  <div className='mt-6'>
                    <h3 className='text-lg font-bold mb-3 text-white'>Links</h3>
                    <div className='flex flex-wrap gap-2'>
                      {data.links.homepage[0] && (
                        <a
                          href={data.links.homepage[0]}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1'>
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
                              d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                            />
                          </svg>
                          Website
                        </a>
                      )}

                      {data.links.blockchain_site[0] && (
                        <a
                          href={data.links.blockchain_site[0]}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-neutral-600 hover:bg-neutral-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1'>
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
                              d='M13 10V3L4 14h7v7l9-11h-7z'
                            />
                          </svg>
                          Explorer
                        </a>
                      )}

                      {data.links.subreddit_url && (
                        <a
                          href={data.links.subreddit_url}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='bg-teal-600 hover:bg-teal-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-4 w-4'
                            viewBox='0 0 24 24'
                            fill='currentColor'>
                            <path d='M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm1 11h-2v-6h2v6zm0-8h-2V5h2v1.5z' />
                          </svg>
                          Reddit
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
