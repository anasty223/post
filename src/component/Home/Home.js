
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navigation from "../Navigation.js/Navigation";

import style from './Home.module.css'
export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>

       <Navigation/>
      <h3 style={{color:"#fff"}}>
        Contacts: (Viber, Telegram, WhatsApp)
       

      </h3>
    
      <ul style={{listStyle:"none"}}>
        <li><a href="tel:+38093757086">+38093757086 </a></li>
      <li> <a href="mailto:anasty22@gmail.com">anasty22@gmail.com</a></li>
      <li>  <a href="https://github.com/anasty223">GitHub</a></li>
      </ul>
    
    
    </div>
  );
}
