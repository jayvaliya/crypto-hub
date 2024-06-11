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
      console.log('Fetching data....');
      const fetchedData = await fetch(url);
      if (!fetchedData.ok) {
        throw new Error('Network response was not ok');
      }
      const jsondata = await fetchedData.json();
      setData(jsondata);
      console.log(jsondata);
    } catch (err) {
      console.log('Unable to fetch data...!!  :<');
      console.log(err);
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
      <div className='my-2'>
        <Link to={'/'} className='font-bold underline'>
          coins
        </Link>{' '}
        &gt;&gt; {id}{' '}
      </div>
      <div className='flex flex-col sm:flex-row gap-6'>
        <div className='w-full sm:w-2/3'>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <>
              <Chart data={data} id={id} />
              <Performance data={data} />
              <About data={data} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
