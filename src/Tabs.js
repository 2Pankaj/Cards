import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const handleTabChange = (tab) => {
    onTabChange(tab);
  };

  return (
    <div className="tabs">
      <div
        className={`tab ${activeTab === 'your' ? 'active' : ''}`}
        onClick={() => handleTabChange('your')}
      >
        Your Cards
      </div>
      <div
        className={`tab ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => handleTabChange('all')}
      >
        All Cards
      </div>
      <div
        className={`tab ${activeTab === 'blocked' ? 'active' : ''}`}
        onClick={() => handleTabChange('blocked')}
      >
        Blocked Cards
      </div>
    </div>
  );
};

export default Tabs;
