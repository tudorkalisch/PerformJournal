import React, { useState } from "react";
import { useDispatch } from "react-redux";
//*Constants
import employees from "../../constants/employees";
import { addSelectedEmployee } from "../../redux/actions/selectUserActions";

import "./EmployeeSelector.scss";

// class EmployeeSelector extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       query: "",
//       users: [
//         'Frank Murphy',
//         'Vic Reynolds',
//         'Gina Jabowski',
//         'Jessi Glaser',
//         'Jay Bilzerian'
//       ]
//     };
//   }

//   componentDidMount() {
//     console.log(this.props)
//     Promise.resolve(EmployeeService.getAllEmployees()).then((value) => {
//       if (value === []) {
//         return
//       }
//       this.setState({
//         users: JSON.parse(value)
//       })
//     }).catch((err) => {
//       console.log("Error " + err)
//     })

//   }

//   render() {
//     return (
//       <div className="container">
//         <TextField placeholder="Search employee" onChange={val => this.setState({ query: val })} />
//         <List className="list"
//           items={this.state.users.filter((user) => user.toLowerCase().includes(this.state.query.toLowerCase()))}
//           selected={[0]}
//           disabled={[4]}
//           multiple={false}
//           onChange={(selected) => { console.log(selected) }}
//         />
//       </div>
//     );
//   }
// }

const EmployeeSelector = (props) => {
  const [selectedEmployee, setSelectedEmployee] = useState("");
  console.log(selectedEmployee);

  const dispatch = useDispatch();

  const onEmployeeChangeHandler = (e) => {
    setSelectedEmployee(e.target.value);
  };

  const findSelectedEmployee = employees.find(
    (employee) =>
      employee.firstName + " " + employee.lastName === selectedEmployee
  );

  const setEmployeeHandler = () => {
    if (findSelectedEmployee) {
      dispatch(
        addSelectedEmployee(
          findSelectedEmployee.firstName,
          findSelectedEmployee.lastName
        )
      );
    }
  };
  return (
    <div>
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
      <button onClick={setEmployeeHandler}>Set employee</button>
    </div>
  );
};

export default EmployeeSelector;
