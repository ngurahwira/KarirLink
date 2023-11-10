import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import Home from "../views/Home";
import ProductDetail from "../views/ProductDetail";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pub/detail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
