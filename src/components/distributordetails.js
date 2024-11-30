import React from 'react';
import './distributordetails.css';

const DistributorDetails = () => {
  const distributors = [
    { name: 'Distributor 1', installed: 4000, assigned: 2000 },
    { name: 'Distributor 2', installed: 3500, assigned: 1500 },
    { name: 'Distributor 3', installed: 5000, assigned: 3000 },
  ];

  return (
    <div className="distributor-details">
       <h3>Distributor Details</h3>
      {distributors.map((distributor, index) => (
        <div key={index} className="distributor-card">
          <p>Distributor Name: {distributor.name}</p>
          <p>Installed Pumps: {distributor.installed}</p>
          <p>Assigned Pumps: {distributor.assigned}</p>
        </div>
      ))}
    </div>
  );
};

export default DistributorDetails;
