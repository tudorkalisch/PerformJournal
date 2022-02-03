import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Subcategories from "./subcategories/Subcategories";

const Categories = (props) => {
  console.log("props.subcategories", props.subcategories);
  return (
    <React.Fragment>
      <h2>{props.categoryHeading}</h2>
      <ol>
        {props.subcategories.map((subcategory) => (
          <Subcategories subcategory={subcategory} />
        ))}
      </ol>
    </React.Fragment>
  );
};

export default Categories;
