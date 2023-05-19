import igImage from "../../assets/img/ig.png"
import whatsappImage from "../../assets/img/whatsapp.png"
import "./Footer.css";
 
const Footer = () => {

    return(
    <>

    <div className="footer">
            <a href="https://wa.me/8297213784?text=¡Estoy+interesado!"><img src={whatsappImage} className="Image"/></a>
           <a href="https://msng.link/o?@lerc7689=ig"><img src={igImage} className="Image"/></a>
     
            <p>Created by Luis E. Ramirez C. 2023®</p>
      </div>
    </>);
}

export default Footer;