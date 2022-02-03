import React from "react";
import CategoriesSelector from "../../categoriesSelector/CategoriesSelector";

//*Styles
import styles from "./employeeCard.module.css";

const EmployeeCard = (props) => {
  const employeeFromLocalStorage = localStorage.getItem("selectedEmployee")
    ? JSON.parse(localStorage.getItem("selectedEmployee"))
    : [];
  const employee = employeeFromLocalStorage.employee;

  console.log("employee", employee);
  return (
    <div>
      <h2>{`Review page for ${
        employee.firstName + " " + employee.lastName
      }`}</h2>
      <CategoriesSelector employee={employee}/>
    </div>
  );
};

export default EmployeeCard;
