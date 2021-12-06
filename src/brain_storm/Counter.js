import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../style.css';

export default function Counter({ type, activeCounter }) {
  // const [clickCount, setClickCount] = useState(0);
  const [count, setCount] = useState(0);
  const [countUnits, setCountUnits] = useState([]);

  useEffect(() => {
    const incrementCount = () => {
      setCount((count) => count + 1);
    };

    if (activeCounter == type) {
      // if (type == 'click') {
      //   window.addEventListener('click', incrementCount);
      // }
      // if (type == 'keydown') {
      //   window.addEventListener('keydown', incrementCount);
      // }
      window.addEventListener(type, incrementCount);
    }

    return function cleanupListener() {
      // window.removeEventListener('click', incrementCount);
      // window.removeEventListener('keydown', incrementCount);

      window.removeEventListener(type, incrementCount);
    };
  }, [activeCounter, type]);

  // useEffect(() => {
  //   const windowClickEvent = () => {
  //     setCount(clickCount => clickCount + 1);
  //   };
  //   window.addEventListener('click', windowClickEvent);
  // }, []);

  useLayoutEffect(() => {
    setCountUnits(getUnits(count));
  }, [count]);

  const getUnits = (count) => {
    return count.toString().split('');
  };

  const resetCounter = (e) => {
    e.stopPropagation();
    let resetTo = 0;
    // if (type == 'click') {
    //   resetTo = -1;
    // }
    setCount((setCount) => resetTo);
  };

  return (
    <div className="counter">
      <div className="panel-container">
        {countUnits.map((unit, i) => (
          <div key={i} className="counter-unit">
            {unit}
          </div>
        ))}
      </div>
      <button className="reset-btn" onClick={resetCounter}>
        Reset
      </button>
    </div>
  );
}
