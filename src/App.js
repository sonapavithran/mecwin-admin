import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Header from './components/header';
import AssetsInfo from './components/assetinfo';
import DistributorDetails from './components/distributordetails';
import Metrics from './components/metrics';
import RegionView from './components/regionview';
import TicketDetails from './components/ticketdetails';
import './App.css';

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
        <div className="content">
          <Metrics />
          <TicketDetails />
          <AssetsInfo />

          {/* Section for DistributorDetails and RegionView */}
          <div className="section">
            <div className="distributor-container">
              <DistributorDetails />
              {/* <RegionView /> */}
            </div>
            
            {/* <div className="region-container"> */}
              <RegionView />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
