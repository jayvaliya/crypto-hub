import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from './SparklineChart';

const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=2`;

  const fetchData = async () => {
    try {
      console.log('Fetching data....');
      const fetchedData = await fetch(url);
      const jsondata = await fetchedData.json();
      setData(jsondata);
      console.log(data);
    } catch (err) {
      console.log('Unable to fetch data...!!  :<');
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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
      {data.length !== 0 ? (
        <div className='container mx-auto p-3'>
          <div className='overflow-x-auto'>
            <table className='w-full table-auto text-center bg-white border-transparent rounded-lg overflow-hidden p-6'>
              <thead className='text-base font-semibold'>
                <tr>
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
                  <tr key={item.ath_date} className=' min-h-[100px]'>
                    <td>{item.market_cap_rank}</td>
                    <td>
                      <Link to={`/coin/${item.id}`}>
                        <div className='flex items-center gap-4'>
                          <img src={item.image} className='h-8 w-8' alt='' />
                          <div>{item.symbol.toUpperCase()}</div>
                        </div>
                      </Link>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.current_price}</td>
                    <td
                      className={`${
                        item.price_change_percentage_1h_in_currency >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                      {item.price_change_percentage_1h_in_currency.toFixed(3)}%
                    </td>
                    <td
                      className={`${
                        item.price_change_percentage_24h_in_currency >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                      {item.price_change_percentage_24h_in_currency.toFixed(3)}%
                    </td>
                    <td
                      className={`${
                        item.price_change_percentage_7d_in_currency >= 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}>
                      {item.price_change_percentage_7d_in_currency.toFixed(3)}%
                    </td>
                    <td>${item.market_cap}</td>
                    <td>
                      <LineChart sparkline={item.sparkline_in_7d} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex flex-col sm:flex-row gap-3 justify-between items-center py-2 sm:py-px text-sm font-medium leading-5 text-gray-500 whitespace-nowrap'>
            <button
              onClick={handlePreviousPage}
              className='btn-pagination'>
              Previous
            </button>
            <div className='text-base leading-5'>{`Page ${page}`}</div>
            <button
              onClick={handleNextPage}
              className='btn-pagination'>
              Next
            </button>
          </div>
        </div>
      ) : (
        <h1>Too many requests</h1>
      )}
    </>
  );
};

export default List;
