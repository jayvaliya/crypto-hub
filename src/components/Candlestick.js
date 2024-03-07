import React, { memo, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

const Candlestick = ({ id, days }) => {
  const [graphData, setGraphData] = useState();
  const url = `https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=${days}&precision=2`;
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

  useEffect(() => {
    console.log('Fetching graph.....');
    fetchGraph();
    // console.log(graphData);
  }, [days]);

  const options = {
    chart: {
      type: 'candlestick',
      height: 350,
    },
    title: {
      text: 'CandleStick Chart',
      align: 'left',
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    // series: [{ name: 'price', data: graphData }],
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
      // width='600'
      height='400'
    />
  );
};

export default Candlestick;