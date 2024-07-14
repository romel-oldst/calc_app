import { ACTION_TYPES } from "../actions/calcActionTypes";


export interface StateType {
  isDarkMode: boolean;
  result: string | number;
  firstOperand: string | number;
  operation: string;
}

export type ActionType =
| { type: 'SET_FIRST_OPERAND'; payload: string }
| { type: 'SET_OPERATION'; payload: string }
| { type: 'SET_RESULT'; payload: string | number }
| { type: 'CLEAR_DATA'; payload: string }
| { type: 'TOGGLE_DARK_MODE'; payload: boolean };

// We compile here the values that we normally declare separately using
// useState in a React component.
export const initialState: StateType = {
  isDarkMode: false,
  result: 0,
  firstOperand: 0,
  operation: "",
};

export const calcReducer = (state: StateType, action: ActionType): StateType => {
  // Each value of initialState should have a corresponding case
  // in the switch statement
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload as boolean,
      };
    case ACTION_TYPES.SET_RESULT:
      return {
        ...state,
        result: action.payload as string,
      };
    case ACTION_TYPES.SET_FIRST_OPERAND:
      return {
        ...state,
        firstOperand: action.payload as string,
      };
    case ACTION_TYPES.SET_OPERATION:
      return {
        ...state,
        operation: action.payload as string,
      };
    case ACTION_TYPES.CLEAR_DATA:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
