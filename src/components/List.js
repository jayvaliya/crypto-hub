import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import LineChart from './SparklineChart';

const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  const cache = useRef({});

  const fetchData = useCallback(async () => {
    if (cache.current[page]) {
      // console.log('Using cached data...');
      setData(cache.current[page]);
      return;
    }

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2`;
    try {
      // console.log('Fetching data....');
      const fetchedData = await fetch(url);
      if (fetchedData.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }
      const jsondata = await fetchedData.json();

      cache.current[page] = jsondata;

      setData(jsondata);
      setError(null);
      // console.log(jsondata);
    } catch (err) {
      console.error('Unable to fetch data:', err);
      setError(err.message);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <>
      {error ? (
        <h1>{error}</h1>
      ) : (
        data.length !== 0 && (
          <div className='container mx-auto mt-5 md:mt-10 p-3'>
            <div className='overflow-x-auto'>
              <table className='w-full table-auto text-center text-white border-transparent rounded-lg overflow-hidden'>
                <thead className='text-base font-semibold'>
                  <tr className='p-7'>
                    <th>Rank</th>
                    <th>Asset</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>1H</th>
                    <th>24H</th>
                    <th>7D</th>
                    <th>Market Cap</th>
                    <th>Last 7 Days</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr
                      key={item.id}
                      className='min-h-[100px] md:text-lg hover:bg-zinc-800'>
                      <td>
                        <Link to={`/coin/${item.id}`}>
                          {item.market_cap_rank}
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/coin/${item.id}`}
                          className='flex items-center gap-4'>
                          <img src={item.image} className='h-8 w-8' alt='' />
                          <div>{item.symbol.toUpperCase()}</div>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/coin/${item.id}`}>{item.name}</Link>
                      </td>
                      <td>
                        <Link to={`/coin/${item.id}`}>
                          ${item.current_price.toFixed(2)}
                        </Link>
                      </td>
                      <td
                        className={`${
                          item.price_change_percentage_1h_in_currency >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                        <Link to={`/coin/${item.id}`}>
                          {item.price_change_percentage_1h_in_currency !==
                            null &&
                          item.price_change_percentage_1h_in_currency !==
                            undefined
                            ? item.price_change_percentage_1h_in_currency.toFixed(
                                3
                              )
                            : 'N/A'}
                        </Link>
                        %
                      </td>
                      <td
                        className={`${
                          item.price_change_percentage_24h_in_currency >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                        <Link to={`/coin/${item.id}`}>
                          {item.price_change_percentage_24h_in_currency !==
                            null &&
                          item.price_change_percentage_24h_in_currency !==
                            undefined
                            ? item.price_change_percentage_24h_in_currency.toFixed(
                                3
                              )
                            : 'N/A'}
                        </Link>
                        %
                      </td>
                      <td
                        className={`${
                          item.price_change_percentage_7d_in_currency >= 0
                            ? 'text-green-600'
                            : 'text-red-600'
                        }`}>
                        <Link to={`/coin/${item.id}`}>
                          {item.price_change_percentage_7d_in_currency !==
                            null &&
                          item.price_change_percentage_7d_in_currency !==
                            undefined
                            ? item.price_change_percentage_7d_in_currency.toFixed(
                                3
                              )
                            : 'N/A'}
                        </Link>
                        %
                      </td>
                      <td>
                        <Link to={`/coin/${item.id}`}>
                          ${item.market_cap.toLocaleString()}
                        </Link>
                      </td>
                      <td>
                        <LineChart sparkline={item.sparkline_in_7d} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 justify-between items-center sm:py-px text-sm font-medium leading-5 text-gray-500 whitespace-nowrap md:px-48 my-10'>
              <button
                onClick={handlePreviousPage}
                className='btn-pagination bg-teal-300 px-3 py-2 font-bold text-black rounded'>
                Previous
              </button>
              <div className='text-base leading-5'>{`Page ${page}`}</div>
              <button
                onClick={handleNextPage}
                className='btn-pagination bg-teal-300 px-3 py-2 font-bold text-black rounded'>
                Next
              </button>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default List;
