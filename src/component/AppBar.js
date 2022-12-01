import { NavLink, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

export default function AppBar() {
    return   <>
    <NavLink
    to={"/navigation"}
    className={({ isActive }) =>
      isActive ? style.activeStyle : style.navLink
    }
  >
   Navigation
  </NavLink>
  <Outlet/>
    </>
}