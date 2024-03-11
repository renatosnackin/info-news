import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface PizzaChartProps {
  data: number[];
  labels: string[];
}

const PizzaChart: React.FC<PizzaChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart<"doughnut"> | null = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              label: 'Vendas',
              data: data,
              backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
               
              ],
              borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                
              ],
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'right'
              },
              
            }
          }
        });
        console.log('Gráfico de pizza criado com sucesso:', chartInstance);
      }
    }

    // Retornando uma função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        console.log('Gráfico de pizza destruído.');
      }
    };
  }, [data, labels]);

  return (
    <div className='pizza'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PizzaChart;
