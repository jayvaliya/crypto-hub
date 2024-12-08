import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const graphDataCache = {};

const Candlestick = ({ id, days }) => {
  const [graphData, setGraphData] = useState();
  const [error, setError] = useState(null);
  const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${days}&precision=2`;

  const fetchGraphData = async () => {
    try {
      // Check if data is already cached
      if (graphDataCache[url]) {
        setGraphData(graphDataCache[url]);
        return;
      }

      console.log('Fetching data from API');
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();

      // Cache the data
      graphDataCache[url] = data;
      setGraphData(data);
    } catch (err) {
      console.error('Error fetching graph data:', err);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchGraphData();
  }, [url]);

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
