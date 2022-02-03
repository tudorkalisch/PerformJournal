import { Button } from "@mui/material";
import React, { Component } from "react";
import EmployeeReview from "../employee_review/EmployeeReview";
import EmployeeSelector from "../employee_selector/EmployeeSelector";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectEmployee: true,
      reviewEmployee: false
    };
  }

  onNext() {
    console.log(this)
    this.setState({
      selectEmployee: false,
      reviewEmployee: true
    })
  }
  
  render() {
    let mainComponent;

    if (this.state.selectEmployee) {
      mainComponent = <EmployeeSelector onNextClick={this.onNext}/>
    }

    if (this.state.reviewEmployee) {
      mainComponent = <EmployeeReview/>
    }
    return (
      <div>
        <div className="navbar">
          <h1>Home</h1>
          <Button className="navbar__button">Logout</Button>
          {mainComponent}
          <Button onClick={() => this.onNext()} >Next</Button>
        </div>
          
      </div>
    );
  }
}

export default Home;
