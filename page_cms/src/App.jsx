import { RouterProvider } from "react-router-dom";
import router from "./assets/routers";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
