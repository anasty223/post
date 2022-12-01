
import { NavLink, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
 
  return (
    <>
      <nav >
       
       
            <ul className={style.navigationContainer}>
              <li>
                <button type="button" className={style.buttonNav}>
                  <NavLink
                  
                    to={"/"}
                    className={({ isActive }) =>
                      isActive ? style.activeStyle : style.navLink
                    }
                  >
                  CV
                  </NavLink>
                </button>
              </li>
              <li >
                <button type="button" className={style.buttonNav}>
                 
                    <NavLink
                      to={"/post"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                     Posts
                    </NavLink>
         
                </button>
              </li>
              <li >
                <button type="button" className={style.buttonNav}>
                 
                    <NavLink
                      to={"/animation"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                  Animation
                    </NavLink>
         
                </button>
              </li>
            </ul>
    
      
      </nav>
    <Outlet/>
    </>
  );
};

export default Navigation;
