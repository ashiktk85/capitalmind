import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 bg-[#f9fafb]">
        <Outlet /> {/* 👈 This renders the child route */}
      </main>
    </div>
  );
}
