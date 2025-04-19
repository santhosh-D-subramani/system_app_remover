
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  console.log("Layout rendered");
  return (
    <>
      <Navbar />
      {/* Outlet renders child components */}
      <main className="pt-14 overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
