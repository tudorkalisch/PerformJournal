import { Button } from "@react-spectrum/button";
import { TextField } from "@react-spectrum/textfield";
import React, { Component } from "react";
import List from "react-list-select/dist/list";
import { Router, withRouter } from 'react-router-dom';
import EmployeeService from "../../service/EmployeeService"
import "./EmployeeSelector.scss";

class EmployeeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      users: [
        'Frank Murphy',
        'Vic Reynolds',
        'Gina Jabowski',
        'Jessi Glaser',
        'Jay Bilzerian'
      ]
    };
  }

  componentDidMount() {
    console.log(this.props)
    Promise.resolve(EmployeeService.getAllEmployees()).then((value) => {
      if (value === []) {
        return
      }
      this.setState({
        users: JSON.parse(value)
      })
    }).catch((err) => {
      console.log("Error " + err)
    })

  }

  render() {
    return (
      <div className="container">
        <TextField placeholder="Search employee" onChange={val => this.setState({ query: val })} />
        <List className="list"
          items={this.state.users.filter((user) => user.toLowerCase().includes(this.state.query.toLowerCase()))}
          selected={[0]}
          disabled={[4]}
          multiple={false}
          onChange={(selected) => { console.log(selected) }}
        />
      </div>
    );
  }
}

export default EmployeeSelector;
