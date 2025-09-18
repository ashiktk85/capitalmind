import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

export default function Sidebar() {
  const sidebarRef = useRef<SidebarComponent>(null);

  return (
    <SidebarComponent
      ref={sidebarRef}
      width={270}
      type="Push" 
      enableGestures={false}
    >
      <div className="p-4">
        <h1 className="text-lg font-bold mb-6">Capitalmind</h1>
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <br />
          <NavLink
            to="/dashboard/portfolio"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-700"
            }
          >
            Portfolio
          </NavLink>
          <br />
        </nav>
      </div>
    </SidebarComponent>
  );
}
