import React, { useState } from "react";
import CalculatorInputs from "./CalculatorInputs";
import CalculatorButtons from "./CalculatorButtons";
import CalculatorResult from "./CalculatorResult";
import CalculatorHistory from "./CalculatorHistory";
import "../Assets/Stylesheets/Calculator.css";

function Calculator() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [date, setDate] = useState(new Date());

  const calculate = () => {
    // if there is no input given (NaN) we set the value to 0
    const a = parseFloat(inputA) || 0;
    const b = parseFloat(inputB) || 0;
    let res;

    switch (operator) {
      case "+":
        res = a + b;
        console.log("res", res);
        break;
      case "-":
        res = a - b;
        break;
      case "*":
        res = a * b;
        break;
      case "/":
        res = a / b;
        break;
      default:
        return;
    }

    setResult(res);
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString("de-AT", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    setHistory([...history, { date: formattedDate, result: res }]);
    newDate.setDate(newDate.getDate() + 1); // each calculation should add one day...
    setDate(newDate);
  };

  const clear = () => {
    setInputA("");
    setInputB("");
    setOperator("+");
    setResult(null);
    setHistory([]);
    setDate(new Date());
  };

  return (
    <div className="calculator">
      <CalculatorInputs
        inputA={inputA}
        inputB={inputB}
        operator={operator}
        onInputAChange={setInputA}
        onInputBChange={setInputB}
        onOperatorChange={setOperator}
      />
      <CalculatorButtons onCalculate={calculate} onClear={clear} />
      <CalculatorResult result={result} />
      <CalculatorHistory history={history} />
    </div>
  );
}

export default Calculator;
