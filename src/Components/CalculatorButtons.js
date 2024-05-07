import React from "react";

function CalculatorButtons({ onCalculate, onClear }) {
  return (
    <div className="buttons">
      <button onClick={onCalculate}>Calc</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default CalculatorButtons;
