
import { NavLink } from "react-router-dom";
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
                   Post
                  </NavLink>
                </button>
              </li>
              <li >
                <button type="button" className={style.buttonNav}>
                 
                    <NavLink
                      to={"/home"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                      Home
                    </NavLink>
         
                </button>
              </li>
            </ul>
    
      
      </nav>
    </>
  );
};

export default Navigation;
