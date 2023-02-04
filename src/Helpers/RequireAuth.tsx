import { FC } from "react";
import Home from "../Home/Home.tsx";
import React from "react";
import { Navigate } from "react-router-dom";

const RequireAuth: FC<{ children: React.ReactElement }> = ({ children }) => {
  const userIsLogged = localStorage.getItem("authenticated");

  if (userIsLogged === "false") {
    return (
      <Navigate replace to="/">
        <Home />
      </Navigate>
    );
  }
  return <React.Fragment>{children}</React.Fragment>;
};

export default RequireAuth;
