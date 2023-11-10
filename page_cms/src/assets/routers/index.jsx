import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/DashboardUser";
import FormLogin from "../components/FormLogin";
import FormJob from "../components/FormAddJob";
import FormStaff from "../components/FormAddUser";
import Company from "../views/CompanyList";
import FormAddCompany from "../components/FormAddCompany";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/company",
        element: <Company />,
      },
    ],
  },
  {
    element: <FormLogin />,
    path: "/Login",
  },
  {
    element: <FormJob />,
    path: "/FormJob",
  },
  {
    element: <FormStaff />,
    path: "/FormStaff",
  },
  {
    element: <FormAddCompany />,
    path: "/FormStaff",
  },
]);

export default router;
