import { Outlet } from "react-router-dom";
import Navbar from "../components/NavbarPublic";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default BaseLayout;
