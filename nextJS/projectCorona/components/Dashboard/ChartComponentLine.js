import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponentLine = (props) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (props.data) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: props.data,
      });
    }
  }, [props.data]);

  return <canvas ref={chartRef} />;
};

export default ChartComponentLine;


