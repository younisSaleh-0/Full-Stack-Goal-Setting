import React from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resister from "./pages/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  // layout
  const Layout = () => {
    return (
      <div className="container">
        <Header />
        <Outlet />
        <ToastContainer />
      </div>
    );
  };

  // Create browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/update/:id",
          element: "update",
        },
        {
          path: "/view/:id",
          element: "view",
        },
        {
          path: "/register",
          element: <Resister />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
