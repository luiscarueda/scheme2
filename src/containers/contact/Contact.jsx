import { Contact_article, Title } from '../../components'
import { CONTACT } from '../../constants/data'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaRegAddressCard } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_bd6bcok', 
                'template_o6dn7rd', 
                 form.current, { publicKey: '1myU-I2T5MFt4CgB7',
      })
      e.target.reset()
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const CONTACT_CONTENT = [
    {icon : <MdOutlineMailOutline />, title:'Email',    description:'luiscrueda.ing@gmail.com',link:"mailto:luiscrueda.ing@gmail.com"},
    {icon : <FaWhatsapp />,           title:'Whatsapp', description:'+573006179301',           link: 'https://api.whatsapp.com/send?phone=573006179301&text=Hola%20,te%20asesoramos%20por%20este%20canal.'},
    {icon : <FaRegAddressCard />,     title:'Address',  description:'carrera 21# 20-13',       link: 'https://web.whatsapp.com/'},
];
  return (
    <section id='contact'>
       <Title 
          title1={CONTACT.tag}
          title2={CONTACT.title}
      />
    
      <div className="container contact__container">
        <div className='contact__options'>
          {CONTACT_CONTENT.map((item,index)=>(
            <Contact_article key={index}
                             icon={item.icon}
                             title ={item.title}
                             description={item.description}
                             link={item.link }
            /> 
            ))}                           
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>       
        </form>        
      </div>
    </section>
  )
}

export default Contact