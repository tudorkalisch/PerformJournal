import { Button } from "@mui/material";
import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSelector from "../../employee_selector/EmployeeSelector"
import "./Home.scss";

const Home = () => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const navigate = useNavigate();

  const onSelectingEmployeeHandler = () => {
    navigate("/employeeCard", { replace: true });
  };

  // let mainComponent;

  // if (this.state.selectEmployee) {
  //   mainComponent = <EmployeeSelector onNextClick={this.onNext} />;
  // }

  // if (this.state.reviewEmployee) {
  //   mainComponent = <EmployeeReview />;
  // }
  return (
    <React.Fragment>
      <div className="navbar">
        <h1>Home</h1>
        <Button className="navbar__button">Logout</Button>
      </div>
      <div className="main">
        <div className="container">
          <EmployeeSelector />
          <Button className="container__btn" type="button" onClick={onSelectingEmployeeHandler}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
