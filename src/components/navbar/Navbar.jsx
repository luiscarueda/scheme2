import './navbar.css'

import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { AiFillCustomerService } from "react-icons/ai";
import { MdConnectWithoutContact } from "react-icons/md";




const Navbar = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="#about"><FaUser /></a>
      <a href="#experience"><BiBook /></a>
      <a href="#services"><AiFillCustomerService /></a>
      <a href="#contact"><MdConnectWithoutContact /></a>
    </nav>
  )
}

export default Navbar