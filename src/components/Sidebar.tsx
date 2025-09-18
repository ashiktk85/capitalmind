import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { NavLink, useLocation } from "react-router-dom";
import { FiHome, FiArchive, FiGift, FiUser } from "react-icons/fi";
import { LuUserPlus } from "react-icons/lu";
import { BsSuitcaseLg } from "react-icons/bs";
import { IoFlaskOutline } from "react-icons/io5";
import type SidebarRef from "@/interfaces/SidebarRef";

const sidebarItems = [
  { name: "Home", path: "/dashboard", icon: <FiHome color="gray" size={18} /> },
  {
    name: "Portfolios",
    path: "/dashboard/portfolio",
    icon: <BsSuitcaseLg color="gray" size={18} />,
  },
  {
    name: "Experimentals",
    path: "/dashboard/experimentals",
    icon: <IoFlaskOutline color="gray" size={18} />,
  },
  {
    name: "Slack Archives",
    path: "/dashboard/slack-archives",
    icon: <FiArchive color="gray" size={18} />,
  },
  {
    name: "Refer a friend",
    path: "/dashboard/refer",
    icon: <LuUserPlus color="gray" size={18} />,
  },
  {
    name: "Gift a subscription",
    path: "/dashboard/gift",
    icon: <FiGift color="gray" size={18} />,
  },
  {
    name: "Account",
    path: "/dashboard/account",
    icon: <FiUser color="gray" size={18} />,
  },
];

type SidebarProps = {};

const Sidebar = forwardRef<SidebarRef, SidebarProps>((props, ref) => {
  const sidebarRef = useRef<SidebarComponent>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen((prev) => !prev),
    hide: () => setIsOpen(false),
  }));

  const isActiveItem = (itemPath: any) => {
    if (itemPath === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <SidebarComponent
      ref={sidebarRef}
      width={250}
      type={isMobile ? "Over" : "Push"}
      enableGestures={true}
      closeOnDocumentClick={true}
      isOpen={isMobile ? isOpen : true}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        height: "100vh",
        zIndex: 100,
        background: "#fff",
      }}
    >
      <div className="flex flex-col justify-between h-full py-6 bg-white relative">
        {isMobile && (
          <button
            className="absolute top-4 right-4 p-2 text-gray-700 text-2xl z-50"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
        )}

        <div>
          <div className="flex items-center gap-2 mb-8 px-4">
            <span className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-2xl  text-black">
              C ,
            </span>
            <div className="flex flex-col">
              <span className="text-md font-semibold">Capitalmind</span>
              <span className="text-[#2EF527] font-semibold text-sm">
                premium
              </span>
            </div>
          </div>

          <nav className="flex flex-col mt-2 px-2">
            {sidebarItems.map((item) => {
              const active = isActiveItem(item.path);
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100 transition ${
                    active
                      ? "bg-gray-200 text-gray-800 font-semibold"
                      : "text-gray-700"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <span>{item.icon}</span>
                  <span className="text-[14px] font-semibold">{item.name}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 flex justify-between px-4 gap-3 text-xs text-gray-500">
          <div>
            <span className="bg-[#059669] w-8 h-8 rounded-full flex items-center justify-center font-bold text-white">
              RN
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span>CMP1Y</span>
            <span className="ml-0 text-gray-400 text-xs">
              Valid till Apr 19, 2025
            </span>
          </div>
        </div>
      </div>
    </SidebarComponent>
  );
});

export default Sidebar;
