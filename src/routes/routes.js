import React, { lazy } from "react";

import { Route } from "react-router-dom";
const Login = lazy(() => import("../pages/Login/Login"));

export const LoginPage = () => (
  <React.Fragment>
    <Route path="/login" element={<Login />} />
  </React.Fragment>
);
