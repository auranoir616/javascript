import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import "chart.js/auto" untuk versi 3

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'pie', // Jenis grafik, seperti bar, line, pie, dll.
      data: data,
    });
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
