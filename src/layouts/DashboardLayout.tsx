import { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import type SidebarRef from "@/interfaces/SidebarRef";

export default function DashboardLayout() {
  const sidebarRef = useRef<SidebarRef>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      {isMobile && (
        <button
          className="p-2 text-gray-700 fixed top-4 left-4 z-[110] bg-white rounded shadow"
          onClick={() => sidebarRef.current?.toggle()}
        >
          <FiMenu size={24} />
        </button>
      )}

      <Sidebar ref={sidebarRef} />

      <div
        className={`flex-1 bg-gray-50 p-3 sm:p-6 min-h-screen transition-all duration-300`}
        style={{ marginLeft: isMobile ? 0 : 250 }} 
      >
        <Outlet />
      </div>
    </div>
  );
}
