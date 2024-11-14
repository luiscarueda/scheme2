import { photo01,photo02,AVTR01,AVTR02,AVTR03,AVTR04  } from "./images";

export  const HEADER = {
    tag: 'Get mi nombtr',
    title:'HEADER',
    description :'lorem ipsum grrro  fopoçtes ',
    photo : photo01,   
  };

export const ABOUT = {  
    tag: 'Get To Know',
    title:'ABOUT ME',
    description :'lorem ipsum grrro  fopoçtes ffffffffffffff fffffffffffffff fffffffffffffffffffff  fffffffffffffffffffff  ffffffffffffffffffffffffffffffff   rrrrrrrrr ffffff',
    photo : photo02,
    data : [
      {  id :1, title: 'Experience ', name: '3+ Years Working', },
      {  id :2, title: 'Clients',     name: '200 + Worldwide',     },
      {  id :3, title: 'Projects ',   name: '80+ Completed',     }
           ],
  };

export const EXPERIENCE = {
      tag:'What Skills I Have',
      title :'My Experience',
      section1 :'FRONTENDEEEE',
      section2 : 'BACKENEEEEEE', 
       
      data1 : [
          {  title: 'HTML' ,element:'EXPERTO',  },
          {  title: 'CSS' , element:'EXPERTO',  },
          {  title: 'HTML' ,element:'EXPERTO',  },
          {  title: 'HTML' ,element:'EXPERTO',  },
          {  title: 'HTML' ,element:'EXPERTO',  },
      ], 

      data2 : [     
         { title: 'HTML' ,  element:'mama',  },
         { title: 'CSS' , element:'papa',    },
         { title: 'HTML' , element:'hijo',   },
      ], 
    };  

export  const SERVICES = {
    
    tag:'What I Offer',
    title :'SERVICES',
    data : [      
        { id :1 , 
          title: 'FRONTEND' , 
          element1:'lorem', 
          element2:'ipsum',
          element3:'ipmama',

        },
        { id :2 , 
          title: 'BACKEND' , 
          element1:'lorem2', 
          element2:'ipsum2',
          element3:'ippapam',
        },
        { id :3 , 
          title: 'CRUD' , 
          element1:'lorem3', 
          element2:'ipsum3',
          element3:'ipsum',
        },
    ],
  }; 
  
export  const TESTIMONIALS = {

    tag: 'Review from Clients ',
    title:'TESTIMONIALS', 
    data : [
      { name: 'MAMA',   opinion: 'titulo 1',icon : AVTR01,},
      { name: 'PAPA',   opinion: 'titulo 2',icon : AVTR02, },
      { name: 'PEPE  ', opinion: 'titulo 3', icon : AVTR03,},
      { name: 'HIJO  ', opinion: 'titulo 4', icon : AVTR04,},
   ],
  }; 

export  const CONTACT = {
    tag :'Get in Touch',
    title:'CONTACT ME',
  };

export  const FOOTER={
    title : 'LUIS CARLOS',
    links : [
      { label : 'HOME',        href:'#' },
      { label : 'ABOUT ME',    href:'#about' },
      { label : 'EXPERIENCE',  href:'#experience' },
      { label : 'SERVICES',    href:'#services' },
      { label : 'TESTIMONIALS',href:'#testimonials' },
      { label : 'CONTACT',     href:'#contact' },      
    ],
  };