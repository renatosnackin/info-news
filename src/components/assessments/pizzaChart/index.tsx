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
          type: "doughnut",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Quantidade",
                data: data,
                backgroundColor: [
                  "rgba(54, 162, 235, 1)",
                  "#030303",
                  "#b4b4b4",
                ],
                borderColor: [
                  "rgba(54, 162, 235, 1)",
                  "#070707",
                  "#b4b4b4",
                ],
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  font: {
                    size: 13,
                    family: "Arial",
                    weight: "bold",
                  },
                },
              },

              tooltip: {
                enabled: true,
              },
            },
          },
        });

      }
    }

    // Retornando uma função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      if (chartInstance) {
        chartInstance.destroy();      }
    };
  }, [data, labels]);

  return (
    <div className='pizza' style={{ width: '258px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PizzaChart;
