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
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstance = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Evolução das Notas",
                data: data,
                backgroundColor: "#836FFF",
                borderColor: "#836FFF",
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                suggestedMin: 0,
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, labels]);
  

  return (
    <div className="barra" style={{ width: '450px'}}>
      <canvas ref={chartRef} width={600} height={250}></canvas>
    </div>
  );
};

export default BarChart;
