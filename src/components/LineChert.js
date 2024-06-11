import React, { useState, useEffect, useCallback } from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ id, days }) => {
  console.log('id', id);
  const [graphData, setGraphData] = useState([]);
  const [error, setError] = useState(null);

  const options = {
    chart: {
      type: 'area',
      height: 350,
      background: 'transparent',
    },
    title: {
      text: 'Line Chart',
      align: 'left',
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
      labels: {
        style: {
          colors: '#fff',
        },
      },
      tooltip: {
        enabled: true,
      },
    },
    theme: {
      mode: 'dark',
    },
    stroke: {
      curve: 'smooth', // Smooth curve
      width: 2, // Adjust the line width (e.g., 2 for thicker)
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 100],
        gradientToColors: ['#0d9488'],
        inverseColors: true,
        shade: 'vertical',
      },
    },
  };

  const fetchLineGraph = useCallback(async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&precision=2`;
    try {
      const fetchedData = await fetch(url);
      if (fetchedData.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      }
      const jsonData = await fetchedData.json();
      setGraphData(jsonData.prices);
    } catch (error) {
      console.error('Unable to fetch graphData', error);
      setError(error.message);
    }
  }, [id, days]);

  useEffect(() => {
    fetchLineGraph();
  }, [fetchLineGraph]);

  return (
    <>
      {error && <div>{error}</div>}
      {graphData.length > 0 && (
        <Chart
          options={options}
          series={[{ name: 'price', data: graphData }]}
          type='area'
          height='400'
        />
      )}
    </>
  );
};

export default LineChart;
