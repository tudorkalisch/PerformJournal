import React, { useState } from "react";
import { useDispatch } from "react-redux";
//*Constants
import employees from "../../constants/employees";
import { addSelectedEmployee } from "../../redux/actions/selectUserActions";

import "./EmployeeSelector.scss";

const EmployeeSelector = (props) => {
  const [selectedEmployee, setSelectedEmployee] =
    useState("Select an Employee");
  console.log(selectedEmployee);

  const dispatch = useDispatch();

  const findSelectedEmployee = employees.find(
    (employee) =>
      employee.firstName + " " + employee.lastName === selectedEmployee
  );

  const onEmployeeChangeHandler = (e) => {
    setSelectedEmployee(e.target.value);
    dispatch(
      addSelectedEmployee(
        findSelectedEmployee.id,
        findSelectedEmployee.firstName,
        findSelectedEmployee.lastName
      )
    );
  };
  console.log("findSelectedEmployee", findSelectedEmployee);
  return (
    <div className="container__search">
      <h4>Search employee</h4>
      <select
        className="cartItem__select"
        value={selectedEmployee}
        onChange={onEmployeeChangeHandler}
      >
        {employees.map((employee) => (
          <option
            key={employee.id}
            value={employee.firstName + " " + employee.lastName}
          >
            {employee.firstName + " " + employee.lastName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EmployeeSelector;
