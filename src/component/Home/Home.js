import CVAnastasyaTrunova from "./CVAnastasyaTrunova.pdf";

export default function Home() {
  return (
    <div>
      <h3 style={{color:"#fff"}}>
        Contacts:(Viber, Telegram, WhatsApp)
       

      </h3>
    
      <ul style={{listStyle:"none"}}>
        <li><a href="tel:+38093757086">+38093757086 </a></li>
      <li> <a href="mailto:anasty22@gmail.com">anasty22@gmail.com</a></li>
      <li>  <a href="https://github.com/anasty223">GitHub</a></li>
      </ul>
      <object><embed src={CVAnastasyaTrunova} width="500" height="750" style={{  marginTop: 20 }}/></object>
    
    </div>
  );
}
