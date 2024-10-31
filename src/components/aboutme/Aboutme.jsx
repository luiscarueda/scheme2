import { TbAerialLift } from "react-icons/tb";
import './aboutme.css'

const Aboutme = ({title,name}) => {
  return (
      <article className='about__card'>
        <TbAerialLift />
        <div>{title}</div>
        <h6>{name}</h6>
         
      </article> 
  )
}

export default Aboutme