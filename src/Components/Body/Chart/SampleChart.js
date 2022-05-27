import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Sample GGU Token Dash Board',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: '유통된 Total GGU Token(10K)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'GGU Token Price($)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'TVL(10K$)',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'orange',
      backgroundColor: 'orange',
    },
  ],
};

export function SampleChart() {
  return (
    <div class="mx-10 my-10 block p-6 max-w-1/2 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sample GGU Token Dash Board</h5>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">(GGU Token Presale 이후 이용가능합니다.)</h5>
    <Line options={options} data={data} />;
</div>
  )
}

export default SampleChart;
