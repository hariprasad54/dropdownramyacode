import React from 'react';

const DropdownApp = () => {

  const handleDropdownChange = (event) => {
    // Handle dropdown selection here
  };

  const renderPopup = () => {
    return (
      <div className="popup">
        <div className="dropdown-container">
          <select className="dropdown" onChange={handleDropdownChange}>
            <option value="option0">Select Cluster Name</option>
            <option value="option1">Cluster 1</option>
            <option value="option2">Cluster 2</option>
            <option value="option3">Cluster 3</option>
          </select>
        </div>
      </div>
    );
  };

  return (
    <div className="dropdown-app">
    <div style={bodyDropdown}>
      {renderPopup()}
      <div><button>Click Button</button></div>
      <div><p>Once the cluster name is selected new window will be opened for the dashboard</p></div>
    </div>
    </div>
  );
};

const bodyDropdown = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
}

export default DropdownApp;
