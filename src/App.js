import { useState, useEffect } from "react";
import "./index.css";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [result, setResult] = useState(0);
  const [firstOperand, setFirstOperand] = useState(0);
  const [operation, setOperation] = useState("");

  const handleDarkmodeCheckboxChange = (event) => {
    setIsDarkMode(event.target.checked);
  };

  const handleNumberClick = (number) => {
    if (number !== "." || !result.includes(".")) {
      if (result == 0) {
        setResult(`${number}`);
      } else {
        setResult(`${result}${number}`);
      }
    }
  };

  const handleOperatorClick = (op) => {
    setFirstOperand(result);
    setOperation(op);
    setResult(0);
  };

  const handleEqualButtonClick = () => {
    let newResult = 0;
    let firstOp = Number(firstOperand);
    let secondOp = Number(result);
    if (operation == "+") {
      newResult = firstOp + secondOp;
      setResult(newResult);
    } else if (operation == "-") {
      newResult = firstOp - secondOp;
      setResult(newResult);
    } else if (operation == "x") {
      newResult = firstOp * secondOp;
      setResult(newResult);
    } else if (operation == "/") {
      newResult = firstOp / secondOp;
      setResult(newResult);
    }
  };

  const handleClearData = () => {
    setFirstOperand(0);
    setOperation("");
    setResult(0);
  };

  useEffect(() => {
    console.log("Changed:", firstOperand, operation, result);
  }, [firstOperand, operation, result]);

  return (
    <div className="App">
      <label className="switch">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={(event) => handleDarkmodeCheckboxChange(event)}
        />
        <span className="slider round"></span>
      </label>
      <div className="calculator">
        <div
          className={`calculator__output ${
            isDarkMode ? "calculator__output__dark" : ""
          }`}
        >
          {result}
        </div>
        <div
          className={`calculator__keys ${
            isDarkMode ? "calculator__keys__dark" : ""
          }`}
        >
          <OperatorButton
            label="+"
            onClick={() => handleOperatorClick("+")}
            isDarkMode={isDarkMode}
          />
          <OperatorButton
            label="-"
            onClick={() => handleOperatorClick("-")}
            isDarkMode={isDarkMode}
          />
          <OperatorButton
            label="&times;"
            onClick={() => handleOperatorClick("x")}
            isDarkMode={isDarkMode}
          />
          <OperatorButton
            label="÷"
            onClick={() => handleOperatorClick("/")}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="7"
            onClick={() => handleNumberClick(7)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="8"
            onClick={() => handleNumberClick(8)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="9"
            onClick={() => handleNumberClick(9)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="4"
            onClick={() => handleNumberClick(4)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="5"
            onClick={() => handleNumberClick(5)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="6"
            onClick={() => handleNumberClick(6)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="1"
            onClick={() => handleNumberClick(1)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="2"
            onClick={() => handleNumberClick(2)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="3"
            onClick={() => handleNumberClick(3)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="0"
            onClick={() => handleNumberClick(0)}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="."
            onClick={() => handleNumberClick(".")}
            isDarkMode={isDarkMode}
          />
          <NumberButton
            label="AC"
            onClick={() => handleClearData()}
            isDarkMode={isDarkMode}
          />
          <button
            className="calculator__key calculator__key--enter"
            onClick={() => handleEqualButtonClick()}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
