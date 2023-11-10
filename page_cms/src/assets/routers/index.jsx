import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Dashboard from "../views/DashboardUser";
import FormLogin from "../components/FormLogin";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/home",
        element: <Dashboard />,
      },
    ],
  },
  {
    element: <FormLogin />,
    path: "/Login",
  },
]);

export default router;
