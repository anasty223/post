
import { NavLink, Outlet } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
 
  return (
    <>
      <nav >
           <div className={style.navigationContainer}>

          
                {/* <button type="button" className={style.buttonNav}> */}
                 
                    {/* <NavLink
                      to={"/post"}
                      className={({ isActive }) =>
                        isActive ? style.activeStyle : style.navLink
                      }
                    >
                     Posts
                    </NavLink> */}
         
                {/* </button> */}
       
  
            </div>
    
      
      </nav>
    <Outlet/>
    </>
  );
};

export default Navigation;
