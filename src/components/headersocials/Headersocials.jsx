import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

import './headersocials.css'
const Headersocials = () => {
  const ICONS = [
    {icon : <FaInstagram />, url:'https://www.instagram.com/' },
    {icon : <FaFacebook  />, url:'https://www.facebook.com/'  },
    {icon : <FaXTwitter  />, url:'https://x.com/' },
];
  return (
    <div className='header__socials icon'> 
    { ICONS.map((item,index)=>(
      <li key={index}>< a href={item.url} target="blank">{item.icon}</a></li>
       ))}            
    </div>
  )
}
export default Headersocials