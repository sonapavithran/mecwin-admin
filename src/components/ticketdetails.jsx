import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'; // Move this to the top of the file

import './ticketdetails.css'; // CSS imports should also be at the top

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TicketDetails = () => {
  const issueCategoryData = {
    labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
    datasets: [
      {
        label: 'High Priority',
        data: [63, 47, 52, 63, 81],
        backgroundColor: '#e74c3c',
      },
      {
        label: 'Moderate Priority',
        data: [52, 47, 45, 60, 50],
        backgroundColor: '#3498db',
      },
      {
        label: 'Low Priority',
        data: [41, 32, 28, 22, 35],
        backgroundColor: '#2ecc71',
      },
    ],
  };

  const openTicketInfoData = {
    labels: ['High Priority', 'Moderate Priority', 'Low Priority'],
    datasets: [
      {
        label: 'Total Tickets',
        data: [81, 63, 52],
        backgroundColor: ['#e74c3c', '#3498db', '#2ecc71'],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="ticket-details">
      <div className="chart issue-category">
        <h3>Issue Category</h3>
        <Bar data={issueCategoryData} options={chartOptions} />
      </div>
      <div className="chart open-ticket-info">
        <h3>Open Ticket Info</h3>
        <Bar data={openTicketInfoData} options={chartOptions} />
      </div>
    </div>
  );
};

export default TicketDetails;
