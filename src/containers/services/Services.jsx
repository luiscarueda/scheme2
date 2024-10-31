import './services.css'
import { SERVICES} from '../../constants/data'
import { Servicescard, Title } from '../../components'

const Services = () => {
  return (
    <section id='services'>
        <Title 
          title1={SERVICES.tag}
          title2={SERVICES.title}
         />   
      <div className="container services__container">
        {SERVICES.data.map((item,index)=>(
           <Servicescard 
                key={index}
                title={item.title}
                element1={item.element1}
                element2={item.element2}
                element3={item.element3}             
            />
        ))}                     
                                
      </div>
    </section>
  )
}

export default Services


                       