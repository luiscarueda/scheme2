import { TestimonialCard, Title } from '../../components'
import './testimonials.css'
import { TESTIMONIALS } from '../../constants/data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {Navigation,Pagination} from 'swiper/modules';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <Title 
        title1={TESTIMONIALS.tag}
        title2={TESTIMONIALS.title}
      />     
      <Swiper className="container testimonials__container"
        navigation={true}
        pagination={{ clickable: true }}                  
        modules={[Navigation,Pagination]}
        spaceBetween={40}
        slidesPerView={1}                 
      >
          {
            TESTIMONIALS.data.map((item,index)=>(
                <SwiperSlide key={index} className='testimonial'>
                  <div className="client__avatar">
                    <img src={item.icon} alt="avatar" />
                  </div>
                  <h5 className='client__name'>{item.name}</h5>
                  <small className='client__review'>{item.opinion}</small>
                </SwiperSlide>
            ))}                
      </Swiper>
    </section>
  )
}
export default Testimonials