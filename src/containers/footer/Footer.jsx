import './footer.css'
import { FOOTER } from "../../constants/data";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
  
const Footer = () => {

  const ICONS = [
    {icon : <FaInstagram />, url:'https://www.instagram.com/' },
    {icon : <FaFacebook  />, url:'https://www.facebook.com/'  },
    {icon : <FaXTwitter  />, url:'https://x.com/' },
];

  return (
    <footer id='footer'>
      <a href="#"className='footer__logo'>{FOOTER.title}</a>
      <ul className='permalinks '>
        {
          FOOTER.links.map((item,index)=>(
             <li key={index}>
                <a href={item.url}>{item.text}</a>
              </li>
          ))}       
     </ul> 
      <div className='footer__socials '>
        {ICONS.map((item,index)=>(
          <a key={index} href={item.url} target='blank'>{item.icon}</a>
        ))}
      </div>
      <div className='footer__copyright '>
        <small  >
         Desarrollado por <span className='footer__name'>L<small>UIS</small>  C@RLOS RUEDA</span>
        </small>
      </div>     
     
    </footer>
  )
}

export default Footer