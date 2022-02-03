import * as actionTypes from "../constants/selectedUserConstants";

export const addSelectedEmployee =
  (id, firstName, lastName) => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.ADD_SELECTED_EMPLOYEE,
      payload: {
        id: id,
        firstName: firstName,
        lastName: lastName,
      },
    });
    localStorage.setItem(
      "selectedUser",
      JSON.stringify(getState().selectedEmployee)
    );
  };

export const removeSelectedEmployee = () => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_SELECTED_EMPLOYEE,
    payload: {
      id: undefined,
      firstName: undefined,
      lastName: undefined,
    },
  });

  localStorage.setItem("user", JSON.stringify(getState().selectedEmployee));
};
