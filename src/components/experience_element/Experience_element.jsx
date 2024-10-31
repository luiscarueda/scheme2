import './experience_element.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience_element = ({title,element}) => {
  return (


    <article className='experience__details'>
        <BsPatchCheckFill className='icon'/>
        <div>
            <h4>{title}</h4>
           <small className='text-light'>{element}</small>
        </div>        
    </article>
  )
}

export default Experience_element