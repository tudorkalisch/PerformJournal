import { useState } from "react";
import Categories from "../../components/categoriesSelector/categories/Categories";

const SUBCATEGORIES_GRADES_INITIAL_STATE = {
  categories: [],
};

export const subcategoriesGradesReducer = (
  state = SUBCATEGORIES_GRADES_INITIAL_STATE,
  action
) => {
if (action.payload == undefined) {
    return state;
  }

  if (action.payload.grade == "") {
    return state;
  }
  let categoryExists = false;
  for (let current in state.categories) {
    console.log("Current" + current);
    if (current.category === action.payload.categoryName) {
      categoryExists = true;
      let subcategoryExists = false;
      for (let subcategory in current.subcategories) {
        if (subcategory == action.payload.subcategoryName) {
          subcategory.grade = action.payload.grade;
          subcategoryExists = true;
        }
      }
      if (!subcategoryExists) {
        current.subcategories.push({
          subcategoryName: action.payload.subcategoryName,
          grade: action.payload.grade,
        });
      }
    }
  }

  if (!categoryExists) {
    const newArray = [...state.categories, 
      {category: action.payload.categoryName,
      subcategories: [
        {
          subcategoryName: action.payload.subcategoryName,
          grade: action.payload.grade,
        }
      ]
    }]
    state.categories = newArray
  }

  switch (action.type) {
    case "ADD_EMPLOYEE_SUBCATEGORY_GRADE": {
      action.payload;
      return state;
    }
    default:
      return state;
  }
};
