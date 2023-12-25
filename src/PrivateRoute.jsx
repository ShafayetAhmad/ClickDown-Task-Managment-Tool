/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userLoading, user } = useContext(AuthContext);
  const location = useLocation();
  if (userLoading) return <h1>Loading</h1>;
  if (user) return children;

  console.log(location.pathname);
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
