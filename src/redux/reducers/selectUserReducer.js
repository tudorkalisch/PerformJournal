import * as actionTypes from "../constants/selectedUserConstants";

const EMPLOYEE_INITIAL_STATE = {
  user: {},
  loggedIn: false,
};

export const userReducer = (state = EMPLOYEE_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_SELECTED_EMPLOYEE:
      return {
        ...state,
        employee: action.payload,
        loggedIn: true,
      };

    case actionTypes.REMOVE_SELECTED_EMPLOYEE:
      return {
        ...state,
        employee: undefined,
        loggedIn: false,
      };
    default:
      return state;
  }
};
