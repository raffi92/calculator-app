import React from "react";

function CalculatorResult({ result }) {
  return (
    <div className="result">{result !== null && <h2>Result: {result}</h2>}</div>
  );
}

export default CalculatorResult;
