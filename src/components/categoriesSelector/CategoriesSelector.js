import React from "react";

import employees from "../../constants/employees";
import Categories from "./categories/Categories";

const CategoriesSelector = (props) => {
  const selectedEmployee =
    props.employee.firstName + " " + props.employee.lastName;

  const findEmployeeDetails = employees.find(
    (employee) =>
      employee.firstName + " " + employee.lastName === selectedEmployee
  );

  console.log("findEmployeeDetails", findEmployeeDetails);
  console.log("employee1", selectedEmployee);

  return (
    <div>
      {findEmployeeDetails.categories.map((category) => (
        <Categories
          id={category.id}
          categoryHeading={category.categoryName}
          subcategories={category.subcategories.map(
            (subcategory) => subcategory
          )}
        />
      ))}
    </div>
  );
};

export default CategoriesSelector;
