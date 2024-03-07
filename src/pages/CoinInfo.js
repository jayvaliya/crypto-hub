import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetStarted from '../components/GetStarted';
import Chart from '../components/Chart';
import About from '../components/About';
import Performance from '../components/Performance';

const CoinInfo = () => {
  const { id } = useParams();
  const [data, setData] = useState('30');
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false`;

  const fetchData = async (e) => {
    try {
      console.log('Fetching data....');
      const fetchedData = await fetch(url);
      const jsondata = await fetchedData.json();
      await setData(jsondata);
      console.log(data);
    } catch (err) {
      console.log('Unable to fetch data...!!  :<');
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("data in coin info", data);
  }, [])

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
          <Chart data={data} id={id} />
          <Performance data={data} />
          <About data={data} />
        </div>
        <div className='w-full sm:w-1/3 mt-4 sm:mt-0'>
          <GetStarted />
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
