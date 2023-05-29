import React from 'react';

const HeaderApp = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Atos</div>
      <div style={descriptionStyle}>Atos - SLA Dashboard and Monitoring Application</div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Onix</button>
        <button style={buttonStyle}>Logout</button>
      </div>
    </header>
  );
};

// CSS styles
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#f2f2f2',
};

const logoStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
};

const descriptionStyle = {
  fontSize: '16px',
};

const buttonContainerStyle = {
  display: 'flex',
};

const buttonStyle = {
  marginLeft: '10px',
};

export default HeaderApp;
