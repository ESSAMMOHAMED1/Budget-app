import React from 'react';
import './Tabs.css';
const Tabs = () => {
  return (
    <div className="tabs">
      <div className="tabs_titles">
        <div className="tab_title active">title</div>
        <div className="tab_title">title</div>
        <div className="tab_title">title</div>
      </div>
      <div className="tab_content">content</div>
    </div>
  );
};

export default Tabs;
