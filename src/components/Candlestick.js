import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { useRecoilState } from 'recoil';
import { CandlestickCaching } from '../store';

const Candlestick = ({ id, days }) => {
  const [graphData, setGraphData] = useState();
  const [error, setError] = useState(null);
  const [cache, setCache] = useRecoilState(CandlestickCaching);
  const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${days}&precision=2`;

  useEffect(() => {
    const fetchGraphData = async () => {
      try {
        if (cache[url]) {
          setGraphData(cache[url]);
          return;
        }

        // console.log('Fetching data from API');
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        setCache((prevState) => ({
          ...prevState,
          [url]: data,
        }));

        setGraphData(data);
      } catch (err) {
        console.error('Error fetching graph data:', err);
        setError(err.message);
      }
    };

    fetchGraphData();
  }, [url, cache, setCache]);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
      background: 'transparent',
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
      style: {
        color: '#fff',
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: '#fff',
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: '#fff',
        },
      },
    },
    theme: {
      mode: 'dark',
    },
    series: [
      {
        data: graphData || [],
      },
    ],
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <Chart
      options={options}
      series={options.series}
      type='candlestick'
      height='400'
    />
  );
};

export default Candlestick;
