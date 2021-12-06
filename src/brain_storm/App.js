import React, { useState, useEffect } from 'react';
import Counter from './Counter';
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
  //   setCounter(type);activeCounter == 'keydown'
  // };activeCounter == 'click'

  return (
    <div className="app">
      <Counter type="click" activeCounter={activeCounter} />

      <div className="radio-buttons">
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
            <label key={counter.type} htmlFor={counter.type}>
              {counter.type}
            </label>
          </>
        ))}
        {/* <input type="radio" value="male" id="male"
              onChange={handleChange} name="gender" />
            <label for="male">Male</label>

            <input type="radio" value="female" id="female"
              onChange={handleChange} name="gender"/>
            <label for="female">Female</label> */}
      </div>

      <Counter type="keydown" activeCounter={activeCounter} />
    </div>
  );
}
