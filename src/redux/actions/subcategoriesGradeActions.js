export const addSubCategoriesGrades =
  (categoryName, subcategoryName, grade) => async (dispatch, getState) => {
    dispatch({
      type: "ADD_EMPLOYEE_SUBCATEGORY_GRADE",
      payload: {
        categoryName: categoryName,
        subcategoryName: subcategoryName,
        grade: grade,
      },
    });
  };
