import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BarChartProps {
  data: number[];
  labels: string[];
}

const BarChart: React.FC<BarChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart | null = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              label: 'Idade',
              data: data,
              backgroundColor: '#20B2AA',
              borderColor: '#20B2AA',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              
              y: {
                beginAtZero: true,
                
              }
            }
          }
        });
        console.log('Gráfico criado com sucesso:', chartInstance);

      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        console.log('Gráfico destruído.');

      }
    };
  }, [data, labels]);

  return (
    <div className='barra'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default BarChart;
