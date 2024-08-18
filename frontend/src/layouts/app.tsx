import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export const App = () => {
  return (
    <div className="h-screen">
      <div className="w-80 h-full fixed">
        <Sidebar />
      </div>
      <div className="ml-80 bg-gray  h-full py-5 px-10">
        <Outlet />
      </div>
    </div>
  );
};
