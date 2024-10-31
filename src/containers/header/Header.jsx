import { CTA, Headersocials } from '../../components'
import './header.css'
import { HEADER } from '../../constants/data'

const Header = () => {
  return (
    <header >      
      <div className= "container header__container">
        <h5>{HEADER.tag}</h5>
        <h1>{HEADER.title}</h1>     
        <h5 className='text-light'>{HEADER.description}</h5>
        <CTA/>
        <div className="me ">
          <img src={HEADER.photo} alt="photo01" />
        </div>
        <a href="#footer" className='scroll__down '>SCROLL </a>   
        <Headersocials/>
      </div>
    </header>
  )
}

export default Header