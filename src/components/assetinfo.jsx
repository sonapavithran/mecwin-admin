import React, { useState } from 'react';
import './assetinfo.css';

const AssetsInfo = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [search, setSearch] = useState('');
  const [assetsData] = useState([
    {
      serialNo: 1,
      deviceName: 'Device 1',
      location: 'Location XYZ',
      outputCurrent: '99.0 A',
      outputPower: '99.0 W',
      outputVoltage: '99.0 V',
      dcBusVoltage: '99.0 V',
      alarm: '99',
      outputFrequency: '99.0 Hz',
    },
    {
      serialNo: 2,
      deviceName: 'Device 2',
      location: 'Location ABC',
      outputCurrent: '85.0 A',
      outputPower: '120.0 W',
      outputVoltage: '85.0 V',
      dcBusVoltage: '115.0 V',
      alarm: '85',
      outputFrequency: '85.0 Hz',
    },
  ]);

  const handleFetchDetails = () => {
    console.log('Fetching details for:', { search, fromDate, toDate });
  };

  return (
    <div className="assets-info">
      <div className="assets-container">
        <h3>Device Details</h3>
        <div className="filters">
          <div className="left-filters">
            <div className="search-group">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-box"
              />
              <button onClick={handleFetchDetails} className="fetch-btn">
                Search
              </button>
           
            <div className="date-group">
              <label>From:</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="date-picker"
              />
              <label>To:</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="date-picker"
              />
              <button onClick={handleFetchDetails} className="fetch-btn">
                Fetch Details
              </button>
            </div>
            </div>
          </div>
          <div className="right-icons">
            <span className="icon">📊</span>
            <span className="icon">⚙️</span>
          </div>
        </div>

        {/* Scrollable table */}
        <div className="table-wrapper">
          <table className="device-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Device Name</th>
                <th>Location</th>
                <th>Output Current</th>
                <th>Output Power</th>
                <th>Output Voltage</th>
                <th>DC Bus Voltage</th>
                <th>Alarm</th>
                <th>Output Frequency</th>
              </tr>
            </thead>
            <tbody>
              {assetsData.map((asset) => (
                <tr key={asset.serialNo}>
                  <td>{asset.serialNo}</td>
                  <td>{asset.deviceName}</td>
                  <td>{asset.location}</td>
                  <td>{asset.outputCurrent}</td>
                  <td>{asset.outputPower}</td>
                  <td>{asset.outputVoltage}</td>
                  <td>{asset.dcBusVoltage}</td>
                  <td>{asset.alarm}</td>
                  <td>{asset.outputFrequency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssetsInfo;
