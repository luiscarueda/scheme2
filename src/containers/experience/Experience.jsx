import './experience.css'
import { Experience_element, Title } from '../../components'
import {  EXPERIENCE} from '../../constants/data'

import React from 'react'

const Experience = () => {
  return (
    <section id='experience'>
      <Title 
          title1={EXPERIENCE.tag}
          title2={EXPERIENCE.title}
      />
      <div className="container experience__container">
        <div className="experience__division">             
            <h3>{EXPERIENCE.section1}</h3>
            <div className="experience__content">
              {EXPERIENCE.data1.map((item,index)=>(
                <Experience_element key={index}
                                    title={item.title}
                                    element={item.element}
                />))}        
            </div>
        </div>
        <div className="experience__division">
             <h3>{EXPERIENCE.section2}</h3>
             <div className="experience__content">
              {EXPERIENCE.data2.map((item,index)=>(
                <Experience_element key={index}
                                    title={item.title}
                                    element={item.element}
                />))}        
            </div>             
        </div>   
      </div>  
    </section>
  )
}
export default Experience