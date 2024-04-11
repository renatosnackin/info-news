import React, { useEffect, useRef } from 'react';
import {Chart} from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

interface PizzaChartProps {
  data: number[];
  labels: string[];
}

const PizzaChart: React.FC<PizzaChartProps> = ({data, labels}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let chartInstance: Chart<"doughnut"> | null = null;

    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
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
                  "rgba(255, 99, 132, 1)",
                  "#b4b4b4",
                ],
                borderColor: [
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 99, 132, 1)",
                  "#b4b4b4",
                ],
                borderWidth: 1,
              },
            ],
          },
          plugins: [ChartDataLabels],
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "right",
              },

              datalabels: {
                font: {
                  size: 14,
                  weight: "bold",
                },
                color: "#ffffff",
                formatter: (value: any) => {
                  return value + "%";
                },
              },

              tooltip: {
                enabled: true,
              },
            },
          },
        }) as any;
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, labels]);

  return (
    <div className="pizza">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default PizzaChart;
