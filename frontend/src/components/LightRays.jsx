import React from 'react';
import './LightRays.css';

const LightRays = ({ mousePosition }) => {
  return (
    <>
      <div className="light-rays-container">
        <div className="light-ray ray-1" />
        <div className="light-ray ray-2" />
        <div className="light-ray ray-3" />
        <div className="light-ray ray-4" />
        <div className="light-ray ray-5" />
      </div>
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
    </>
  );
};

export default LightRays;