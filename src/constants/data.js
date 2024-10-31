import { photo01,photo02,AVTR1,AVTR2,AVTR3,AVTR4  } from "./images";

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
      { names: 'MAMA',opinion: 'la mejor conferencia del mundo OPINION ',icon : AVTR1,},
      { names: 'PAPA',opinion: 'titulo2',icon : AVTR2, },
      { names: 'PEPE  ', opinion: 'titulo3', icon : AVTR3,},
      { names: 'HIJO  ', opinion: 'titulo3', icon : AVTR4,},

   ],
  }; 

  export  const CONTACT = {
    tag :'Get in Touch',
    title:'CONTACT ME',
  };

  export  const FOOTER={
    title : 'LUIS CARLOS',
    links : [
      { text : 'HOME', url:'#' },
      { text : 'ABOUT ME', url:'#about' },
      { text : 'EXPERIENCE', url:'#experience' },
      { text : 'SERVICES', url:'#services' },
      { text : 'TESTIMONIALS', url:'#testimonials' },
      { text : 'CONTACT', url:'#contact' },      
    ],
  };

