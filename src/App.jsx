import { Navbar } from './components'
import { About,Header,Testimonials,Services,Experience,Contact, Footer } from './containers'
import './App.css'


const App = () => {
  return (
    <section>
      <Header/>
      <Navbar/>      
      <About/>
      <Experience/>
      <Services/>              
      <Testimonials/>    
      <Contact/>
      <Footer/>     
    </section>

    
  )
}

export default App
