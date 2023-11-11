import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../views/BaseLayout";
import ProductDetail from "../views/ProductDetail";
import Home from "../views/HomePage";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
