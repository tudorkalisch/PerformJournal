import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addSubCategoriesGrades } from "../../../../redux/actions/subcategoriesGradeActions";

const Subcategories = (props) => {
  const [selectedGrade, setSelectedGrade] = useState(0);

  const dispatch = useDispatch();

  const gradeChangeHandler = (e) => {
    setSelectedGrade(e.target.value);
    dispatch(
      addSubCategoriesGrades(
        props.categoryName,
        props.subcategory.subcategoryName,
        e.target.value
      )
    );
    console.log(selectedGrade);
  };
  return (
    <div key={props.subcategory.id}>
      <li>{props.subcategory.subcategoryName}</li>
      <input
        type="number"
        value={selectedGrade}
        onChange={gradeChangeHandler}
      ></input>
    </div>
  );
};

export default Subcategories;
