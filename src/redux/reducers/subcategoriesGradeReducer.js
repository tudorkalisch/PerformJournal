const SUBCATEGORIES_GRADES_INITIAL_STATE = {
  subcategoryName: "",
  grade: undefined,
};

export const subcategoriesGradesReducer = (
  state = SUBCATEGORIES_GRADES_INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case "ADD_EMPLOYEE_SUBCATEGORY_GRADE":
      return {
        ...state,
        subcategoryName: action.payload.subcategoryName,
        grade: action.payload.grade,
      };
    default:
      return state;
  }
};
