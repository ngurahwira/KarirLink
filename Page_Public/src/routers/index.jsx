import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    elemennt: <Home />,
  },
]);

export default router;
