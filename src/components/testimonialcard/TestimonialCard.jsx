
import './testimonialcard.css'

const TestimonialCard = ({names,opinion}) => {
  return (
    <article className='testimonial'>
       <div className='client__avatar'>
        
       </div>
         <h5 className='client__name'>{names}</h5>
        <small className='client__review'>{opinion}</small>    
        
    </article>
   
  )
}

export default TestimonialCard