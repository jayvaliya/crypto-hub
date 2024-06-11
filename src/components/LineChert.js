import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const LineChert = ({ id, days }) => {
  console.log("id",id);
  const [graphData, setGraphData] = useState();
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&precision=2`;
  const options = {
    chart: {
      type: 'area',
      height: 350,
      background: 'transperent',
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
    theme:{
      mode: 'dark',
    },
    stroke: {
        curve: 'smooth', // Smooth curve
        width: 2, // Adjust the line width (e.g., 2 for thicker)
      },
    series: [{ name: 'price', data: graphData }],
    
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
  async function fetchLineGraph() {
    try {
      const fetchedData = await fetch(url);
      const jsonData = await fetchedData.json();
      setGraphData(jsonData.prices);
    } catch (error) {
      console.log('Unable to fetch graphData');
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('Fetching lineGraph.....');
    fetchLineGraph();
    console.log(graphData);
  }, [days]);

  return (
    graphData && (
      <Chart
        options={options}
        series={options.series}
        type='area'
        // width='600'
        height='400'
      />
    )
  );
};

export default LineChert;
