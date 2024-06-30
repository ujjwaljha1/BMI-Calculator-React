import './App.css';
import React, { useState, useEffect } from "react";

function App() {
  const [height, setHeight] = useState(170); 
  const [weight, setWeight] = useState(70);  
  const [bmi, setBmi] = useState(calculateBMI(170, 70));

  useEffect(() => {
    setBmi(calculateBMI(height, weight));
  }, [height, weight]);

  function calculateBMI(height, weight) {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  }

  return (
    <div className="App">
      <h1>Project: BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} KG</p>
        <input
          className='Slider'
          type='range'
          step="1"
          min="40"
          max="200"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <p className='slider-output'>Height: {height} cm</p>
        <input
          className='Slider'
          type='range'
          step="1"
          min="100"
          max="250"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{bmi}</p>
      </div>
    </div>
  );
}

export default App;
