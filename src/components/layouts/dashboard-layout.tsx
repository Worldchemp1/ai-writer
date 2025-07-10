import Saidbar from "../dashboard/saidbar";
import Navbar from "../dashboard/navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="h-screen overflow-hidden flex">
      <Saidbar />
      <div className="w-full">
        <Navbar />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// 20:00
