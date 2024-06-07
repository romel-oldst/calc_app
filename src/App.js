import { useEffect, useReducer } from "react";
import "./index.css";
import { NumberButton, OperatorButton } from "./components/index";
import { ACTION_TYPES } from "./actions/calcActionTypes";
import { calcReducer, initialState } from "./reducers/calcReducer";

const buttonData = [
  {
    label: "+",
    value: "+",
    type: "operator",
  },
  {
    label: "-",
    value: "-",
    type: "operator",
  },
  {
    label: "×",
    value: "x",
    type: "operator",
  },
  {
    label: "÷",
    value: "/",
    type: "operator",
  },
  {
    label: "7",
    value: 7,
    type: "number",
  },
  {
    label: "8",
    value: 8,
    type: "number",
  },
  {
    label: "9",
    value: 9,
    type: "number",
  },
  {
    label: "4",
    value: 4,
    type: "number",
  },
  {
    label: "5",
    value: 5,
    type: "number",
  },
  {
    label: "6",
    value: 6,
    type: "number",
  },
  {
    label: "1",
    value: 1,
    type: "number",
  },
  {
    label: "2",
    value: 2,
    type: "number",
  },
  {
    label: "3",
    value: 3,
    type: "number",
  },
  {
    label: "0",
    value: 0,
    type: "number",
  },
  {
    label: ".",
    value: ".",
    type: "number",
  },
];

export default function App() {
  const [state, dispatch] = useReducer(calcReducer, initialState);

  const handleDarkmodeCheckboxChange = (event) => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_DARK_MODE,
      payload: event.target.checked,
    });
  };

  const handleNumberClick = (number) => {
    if (number !== "." || !state.result.toString().includes(".")) {
      if (Number(state.result) === 0) {
        dispatch({ type: ACTION_TYPES.SET_RESULT, payload: `${number}` });
      } else {
        dispatch({
          type: ACTION_TYPES.SET_RESULT,
          payload: `${state.result}${number}`,
        });
      }
    }
  };

  const handleOperatorClick = (op) => {
    dispatch({ type: ACTION_TYPES.SET_FIRST_OPERAND, payload: state.result });
    dispatch({ type: ACTION_TYPES.SET_OPERATION, payload: op });
    dispatch({ type: ACTION_TYPES.SET_RESULT, payload: 0 });
  };

  const handleEqualButtonClick = () => {
    let newResult = 0;
    let firstOp = Number(state.firstOperand);
    let secondOp = Number(state.result);

    switch (state.operation) {
      case "+":
        newResult = firstOp + secondOp;
        dispatch({ type: ACTION_TYPES.SET_RESULT, payload: newResult });
        break;

      case "-":
        newResult = firstOp - secondOp;
        dispatch({ type: ACTION_TYPES.SET_RESULT, payload: newResult });
        break;

      case "x":
        newResult = firstOp * secondOp;
        dispatch({ type: ACTION_TYPES.SET_RESULT, payload: newResult });
        break;

      case "/":
        newResult = firstOp / secondOp;
        dispatch({ type: ACTION_TYPES.SET_RESULT, payload: newResult });
        break;

      default:
        break;
    }
  };

  const handleClearData = () => {
    dispatch({ type: ACTION_TYPES.CLEAR_DATA });
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
          onChange={handleDarkmodeCheckboxChange}
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
          {buttonData.map((button) =>
            button.type === "operator" ? (
              <OperatorButton
                label={button.label}
                onClick={() => handleOperatorClick(button.value)}
                isDarkMode={state.isDarkMode}
              />
            ) : (
              <NumberButton
                label={button.label}
                onClick={() => handleNumberClick(button.value)}
                isDarkMode={state.isDarkMode}
              />
            )
          )}
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

// export the components to a separate index file
