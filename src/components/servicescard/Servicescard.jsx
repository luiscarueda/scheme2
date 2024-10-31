import './servicescard.css';
import { CiBasketball } from "react-icons/ci";

const Servicescard = ({title,element1,element2,element3}) => {
  return (
       <article className=" service">
           <div className="service__head">
               <h3>{title}</h3>    
           </div>
       <div>
          <ul className='service__list'>             
          <li> 
              <div>
              <CiBasketball/>
               <p>{element1}</p>  
              </div> 
              <div>
              <CiBasketball/>
               <p>{element2}</p>  
              </div>
              <div>
              <CiBasketball/>
               <p>{element3}</p>  
              </div>

          </li>
        </ul>
    </div>
   </article>  
  )
}

export default Servicescard