import React, { useState, useEffect, useLayoutEffect, useReducer } from 'react';
import '../style.css';

export default function Counter({ type, activeCounter }) {
  const [count, setCount] = useState(0);
  const [countUnits, setCountUnits] = useState([]);

  // TODO - useReducer to replace setCount for counter increments

  useEffect(() => {
    const incrementCount = () => {
      setCount((count) => count + 1);
    };

    if (activeCounter == type) {
      window.addEventListener(type, incrementCount);
    }

    return () => {
      window.removeEventListener(type, incrementCount);
    };
  }, [activeCounter, type]);

  useLayoutEffect(() => {
    setCountUnits(getUnits(count));
  }, [count]);

  const getUnits = (count) => {
    return count.toString().split('');
  };

  const resetCounter = (e) => {
    e.stopPropagation();
    let resetTo = 0;
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
