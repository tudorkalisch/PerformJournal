import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { defaultTheme, Provider } from "@adobe/react-spectrum";

import { Login } from "../login/Login";
import Home from "../home/Home";
import useToken from "./useToken";
import EmployeeReview from "../employee_review/EmployeeReview";

export const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <Provider theme={defaultTheme} height="100%">
        <Login setToken={setToken} />
      </Provider>
    );
  }

  return (
    <Provider theme={defaultTheme} height="100%">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/review" element={<EmployeeReview />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
