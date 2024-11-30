import React from 'react';
import './sidebar.css';

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isExpanded ? '⬅️' : '➡️'}
      </button>
      <div className="logo">{isExpanded && 'SIDE'}</div>
      <ul>
        <li>{isExpanded ? '📊 Dashboard' : '📊'}</li>
        <li>{isExpanded ? '💡 Insights' : '💡'}</li>
        <li>{isExpanded ? '📂 Tickets' : '📂'}</li>
        <li>{isExpanded ? '🔧 Settings' : '🔧'}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
