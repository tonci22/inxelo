import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.tsx";
import Home from "../Home/Home.tsx";
import RequireAuth from "../Helpers/RequireAuth.tsx";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
};

export default Main;
