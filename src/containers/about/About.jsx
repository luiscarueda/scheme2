import { Aboutme, Title } from '../../components'
import { ABOUT} from '../../constants/data'
import './about.css'

const About = () => {
  return (
    <section id='about'>
      <Title           
          title1={ABOUT.tag}
          title2={ABOUT.title}
      />    
       <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image  ">          
            <img src={ABOUT.photo} alt="about" />     
          </div>
        </div>
        <div className="about__content  ">
          <div className="about__cards  ">
            {ABOUT.data.map((data,index)=>(
              <Aboutme key={index}
                       title={data.title}
                       name={data.name}                  
            />))}    
          </div> 
          <p>{ABOUT.description}</p>      
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>       
        </div>
      </div>
    </section>
  )
}
export default About