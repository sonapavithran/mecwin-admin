import React from 'react';
import './metrics.css';

const Metrics = () => {
  return (
    <div className="metrics">
      <div className="metric">
        <div className="metric-content">
          <div>
            <div className="number">48</div>
            <div className="label">Distributor Network</div>
          </div>
          <div className="icon">🌐</div>
        </div>
      </div>
      <div className="metric">
        <div className="metric-content">
          <div>
            <div className="number">6026</div>
            <div className="label">Pumps Registered</div>
          </div>
          <div className="icon">💧</div>
        </div>
      </div>
      <div className="metric">
        <div className="metric-content">
          <div>
            <div className="number">300</div>
            <div className="label">Tickets Raised</div>
          </div>
          <div className="icon">📂</div>
        </div>
      </div>
      <div className="metric">
        <div className="metric-content">
          <div>
            <div className="number">289</div>
            <div className="label">Tickets Solved</div>
          </div>
          <div className="icon">✅</div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
