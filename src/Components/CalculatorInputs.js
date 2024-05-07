import React from "react";

function CalculatorInputs({
  inputA,
  inputB,
  operator,
  onInputAChange,
  onInputBChange,
  onOperatorChange,
}) {
  return (
    <div className="inputs">
      <input
        type="number"
        placeholder="10"
        value={inputA}
        onChange={(e) => onInputAChange(e.target.value)}
      />
      <select
        value={operator}
        onChange={(e) => onOperatorChange(e.target.value)}
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        placeholder="8"
        value={inputB}
        onChange={(e) => onInputBChange(e.target.value)}
      />
    </div>
  );
}

export default CalculatorInputs;
