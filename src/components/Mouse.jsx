import React, { useState, useEffect } from 'react';
import './Mouse.css';

function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App1">
      <h1>Move Element on Mouse Move</h1>
      <div
        className="moving-element"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></div>
    </div>
  );
}

export default Mouse;
