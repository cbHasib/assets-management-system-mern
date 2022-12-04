import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DashboardLayout from "../Layout/Dashboard/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Target from "../Pages/Dashboard/Target/Target/Target";
import AddNewTarget from "../Pages/Dashboard/Target/AddNewTarget/AddNewTarget";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard/" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/target",
        element: <Target />,
      },
      {
        path: "/dashboard/target/add-new",
        element: <AddNewTarget />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
