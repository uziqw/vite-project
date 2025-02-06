import React from 'react';

const MyBox: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontFamily: 'Arial, sans-serif', 
      height: '100vh', // Centers the content vertically on the screen
      textAlign: 'center' 
    }}>
      {/* Your Name on Top */}
      <h1 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>
        John Angelo Pabustan
      </h1>

      {/* Box with CPEITEL inside */}
      <div style={{ 
        width: '200px', 
        height: '100px', 
        border: '2px solid black', 
        backgroundColor: '#FFCCCB', // Light red color
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontSize: '20px', 
        fontWeight: 'bold', 
        color: '#000' // Black text color
      }}>
        CPEITEL
      </div>
    </div>
  );
};

export default MyBox;