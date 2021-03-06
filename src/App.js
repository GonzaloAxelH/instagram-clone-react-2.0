import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import UserContext from "./context/user";
import ProtectedRout from "./protectedroute";
import useAuthListener from "./hooks/useAuthListener";

const Login = lazy(() => import("./pages/Login/Login"));
const SignUp = lazy(() => import("./pages/SignIn/SignIn"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Profile = lazy(() => import("./pages/Profile/Profile"))
const Home = lazy(() => import("./pages/Home/Home"));
const App = () => {
  const { user } = useAuthListener();
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <ProtectedRout user={user}>
                  <Home />
                </ProtectedRout>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/p/:username" element={<Profile />} />

          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
