import React, { Fragment } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignIn/SignIn"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const App = () => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/not-found" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
