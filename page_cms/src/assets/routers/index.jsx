import { createBrowserRouter, Navigate } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/DashboardUser";
import FormLogin from "../components/FormLogin";
import FormJob from "../components/FormAddJob";
import FormStaff from "../components/FormAddUser";
import Company from "../views/CompanyList";
import FormAddCompany from "../components/FormAddCompany";

const isAuthenticated = () => {
  const accessToken = localStorage.getItem("token");
  return !!accessToken;
};

const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};
const router = createBrowserRouter([
  {
    element: <FormLogin />,
    path: "/login",
  },
  {
    element: <FormStaff />,
    path: "/register",
  },
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <PrivateRoute element={<Dashboard />} path="/" />,
      },
      {
        path: "/company",
        element: <PrivateRoute element={<Company />} path="/company" />,
      },
    ],
  },
  {
    element: <FormJob />,
    path: "/formJob",
  },
  {
    element: <FormAddCompany />,
    path: "/formCompany",
  },
]);

export default router;
