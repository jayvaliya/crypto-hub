import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const Candlestick = ({ id, days }) => {
  const [graphData, setGraphData] = useState();
  const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${days}&precision=2`;

  
  useEffect(() => {
    async function fetchGraph() {
      try {
        const fetchedData = await fetch(url);
        const jsonData = await fetchedData.json();
        setGraphData(jsonData);
      } catch (error) {
        console.log('Unable to fetch graphData');
        console.log(error);
      }
    }
    console.log('Fetching graph.....');
    fetchGraph();
  }, [days, id, url]);

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
        data: graphData,
      },
    ],
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type='candlestick'
      height='400'
    />
  );
};

export default(Candlestick);
