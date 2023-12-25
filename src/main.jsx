import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Homepage from "./Components/Homepage/Homepage";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserLogin from "./Components/UserManagment/UserLogin/UserLogin";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute";
import UserRegister from "./Components/UserManagment/UserRegister/UserRegister";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h1>This is the error page</h1>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <UserLogin></UserLogin>,
      },
      {
        path: "/register",
        element: <UserRegister></UserRegister>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
