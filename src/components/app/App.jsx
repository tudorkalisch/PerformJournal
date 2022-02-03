import React from "react";
import { Router, Route, Routes, BrowserRouter } from "react-router-dom";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

import { Login } from "../login/Login";
import Home from "../screens/home/Home";
import useToken from "./useToken";

//*Components
import EmployeeCard from "../screens/employeeCard/employeeCard";

export const App = () => {
  const { token, setToken } = useToken();

  // if (!token) {
  //   return (
  //     <Provider theme={defaultTheme} height="100%">
  //       <Login setToken={setToken} />
  //     </Provider>
  //   );
  // }

  return (
    <Provider theme={defaultTheme} height="100%">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/" element={<Home />} />
          <Route path="/employeeCard" element={<EmployeeCard/>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
