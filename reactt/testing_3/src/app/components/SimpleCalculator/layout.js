import React from 'react';

import { add, substract } from './constants';

import './styles.css';

function SimpleCalculator({ onAdd, onSubstract, calculatorValue }) {
  return (
    <div className="simple-calculator-container">
      <div className="simple-calculator">
        <h1 className="value-title">{calculatorValue}</h1>
        <div className="calculator-buttons-container">
          <button onClick={onAdd} className="calculator-button">
            {add}
          </button>
          <button onClick={onSubstract} className="calculator-button">
            {substract}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCalculator;
