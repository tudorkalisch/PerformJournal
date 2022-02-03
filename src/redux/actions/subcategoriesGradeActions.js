export const addSubCategoriesGrades =
  (subcategoryName, grade) => async (dispatch, getState) => {
    dispatch({
      type: "ADD_EMPLOYEE_SUBCATEGORY_GRADE",
      payload: {
        subcategoryName: subcategoryName,
        grade: grade,
      },
    });

  };

