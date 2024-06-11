import React, { memo } from 'react';
import Chart from 'react-apexcharts';

const LineChart = ({ sparkline }) => {
  const chartOptions = {
    chart: {
      type: 'area',
      width: '500px',
      sparkline: { enabled: true },
      background: 'transparent',
    },
    theme: {
      mode: 'dark',
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.1,
        stops: [0, 100],
        gradientToColors: ['#0d9488'],
        inverseColors: true,
        shade: 'vertical'
      }
    },
    tooltip: {
      shared: false,
      x: { show: false },
      y: { show: false },
    },
    stroke: {
      width: 1,
      curve: 'straight',
    },
    xaxis: {
      categories: [''],
      crosshairs: { show: false },
    },
    series: [{ name: 'price', data: sparkline.price }],
  };

  return (
    <div className='app mx-auto w-fit hover:cursor-none'>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type='area'
        width='320'
        height='120'
      />
    </div>
  );
};

export default memo(LineChart);
