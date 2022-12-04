import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./DashboardLayout.css";
const DashboardLayout = () => {
  useScrollToTop();

  const { logout } = useContext(AuthContext);

  const dashboardMenu = (
    <>
      <ul>
        <li>
          <NavLink
            to="/dashboard/"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNormal"
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/team"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNormal"
            }
          >
            Team
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/report"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNormal"
            }
          >
            Report
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/target"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNormal"
            }
          >
            Target
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/setting"
            className={({ isActive }) =>
              isActive ? "linkActive" : "linkNormal"
            }
          >
            Setting
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <div className="dashboardHeader">
        {/* Style added in App.css */}
        <div className="flex w-full flex-justify-between flex-align-center">
          <span className="logo-text">Logo</span>
          <button onClick={logout}>Logout</button>
        </div>
      </div>

      <div>
        <div className="dashboardMenu">{dashboardMenu}</div>
      </div>

      <div>
        <div className="dashboardContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
