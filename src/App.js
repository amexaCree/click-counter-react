import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';
import './style.css';

const counters = [
  { id: 1, type: 'click' },
  { id: 2, type: 'keydown' },
];

export default function App() {
  const [activeCounter, setActiveCounter] = useState(counters[0].type);

  const selectCounter = (e) => {
    e.stopPropagation();
    setActiveCounter(e.target.value);
  };

  return (
    <div className="app">
      <Counter type="click" activeCounter={activeCounter} />

      <div className="radio-buttons">
        <label key={counters[0].type} htmlFor={counters[0].type}>
          {counters[0].type}
        </label>
        {counters.map((counter) => (
          <>
            <input
              type="radio"
              name="counterType"
              onChange={selectCounter}
              value={counter.type}
              key={counter.id}
              id={counter.type}
              checked={counter.type == activeCounter}
            />
          </>
        ))}
        <label key={counters[1].type} htmlFor={counters[1].type}>
          {counters[1].type}
        </label>
      </div>

      <Counter type="keydown" activeCounter={activeCounter} />
    </div>
  );
}
