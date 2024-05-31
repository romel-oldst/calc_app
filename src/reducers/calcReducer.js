import { ACTION_TYPES } from "../actions/calcActionTypes";

export const initialState = {
  isDarkMode: false,
  result: 0,
  firstOperand: 0,
  operation: "",
};

export const calcReducer = (state, action) => {
  // Each value of initialState should have a corresponding case
  // in the switch statement
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      }
    case ACTION_TYPES.SET_RESULT:
      return {
        ...state,
        result: action.payload,
      }
    case ACTION_TYPES.SET_FIRST_OPERAND:
      return {
        ...state,
        firstOperand: action.payload,
      }
    case ACTION_TYPES.SET_OPERATION:
      return {
        ...state,
        operation: action.payload,
      }
    case ACTION_TYPES.CLEAR_DATA:
      return {
        ...state,
        firstOperand: 0,
        operation: "",
        result: 0,
      }
    default:
      return state;
  }
}
