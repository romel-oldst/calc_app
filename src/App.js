import { useEffect, useReducer } from "react";
import "./index.css";
import NumberButton from "./components/NumberButton";
import OperatorButton from "./components/OperatorButton";
import { ACTION_TYPES } from "./actions/calcActionTypes";
import { calcReducer, initialState } from "./reducers/calcReducer";


export default function App() {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const handleDarkmodeCheckboxChange = (event) => {
    dispatch({type: ACTION_TYPES.TOGGLE_DARK_MODE, payload: event.target.checked});
  };

  const handleNumberClick = (number) => {
    if (number !== "." || !state.result.toString().includes(".")) {
      if (Number(state.result) === 0) {
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: `${number}`});
      } else {
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: `${state.result}${number}`});
      }
    }
  };

  const handleOperatorClick = (op) => {
    dispatch({type: ACTION_TYPES.SET_FIRST_OPERAND, payload: state.result});
    dispatch({type: ACTION_TYPES.SET_OPERATION, payload: op});
    dispatch({type: ACTION_TYPES.SET_RESULT, payload: 0});
  };

  const handleEqualButtonClick = () => {
    let newResult = 0;
    let firstOp = Number(state.firstOperand);
    let secondOp = Number(state.result);

    switch (state.operation) {
      case "+":
        newResult = firstOp + secondOp;
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: newResult});
        break;

      case "-":
        newResult = firstOp - secondOp;
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: newResult});
        break;

      case "x":
        newResult = firstOp * secondOp;
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: newResult});
        break;

      case "/":
        newResult = firstOp / secondOp;
        dispatch({type: ACTION_TYPES.SET_RESULT, payload: newResult});
        break;

      default:
        break;
    }
  };

  const handleClearData = () => {
    dispatch({type: ACTION_TYPES.CLEAR_DATA});
  };

  useEffect(() => {
    console.log("Changed:", state.firstOperand, state.operation, state.result);
  }, [state]);

  return (
    <div className="App">
      <label className="switch">
        <input
          type="checkbox"
          checked={state.isDarkMode}
          onChange={(event) => handleDarkmodeCheckboxChange(event)}
        />
        <span className="slider round"></span>
      </label>
      <div className="calculator">
        <div
          className={`calculator__output ${
            state.isDarkMode ? "calculator__output__dark" : ""
          }`}
        >
          {state.result}
        </div>
        <div
          className={`calculator__keys ${
            state.isDarkMode ? "calculator__keys__dark" : ""
          }`}
        >
          <OperatorButton
            label="+"
            onClick={() => handleOperatorClick("+")}
            isDarkMode={state.isDarkMode}
          />
          <OperatorButton
            label="-"
            onClick={() => handleOperatorClick("-")}
            isDarkMode={state.isDarkMode}
          />
          <OperatorButton
            label="&times;"
            onClick={() => handleOperatorClick("x")}
            isDarkMode={state.isDarkMode}
          />
          <OperatorButton
            label="÷"
            onClick={() => handleOperatorClick("/")}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="7"
            onClick={() => handleNumberClick(7)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="8"
            onClick={() => handleNumberClick(8)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="9"
            onClick={() => handleNumberClick(9)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="4"
            onClick={() => handleNumberClick(4)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="5"
            onClick={() => handleNumberClick(5)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="6"
            onClick={() => handleNumberClick(6)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="1"
            onClick={() => handleNumberClick(1)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="2"
            onClick={() => handleNumberClick(2)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="3"
            onClick={() => handleNumberClick(3)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="0"
            onClick={() => handleNumberClick(0)}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="."
            onClick={() => handleNumberClick(".")}
            isDarkMode={state.isDarkMode}
          />
          <NumberButton
            label="AC"
            onClick={() => handleClearData()}
            isDarkMode={state.isDarkMode}
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
