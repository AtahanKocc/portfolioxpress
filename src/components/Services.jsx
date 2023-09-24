import React from 'react'
import Section from './common/Section'

import commerce from '../assets/e-commerace.png'
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import research from '../assets/research.png';

const Services = () => {
  const services = [
   {
     id: 1,
     image: commerce,
     title: 'E-Commerce',
   },
   {
    id: 2,
    image: web,
    title: 'Web Development',
   },
   {
    id:3,
    image: mobile,
    title: 'Mobile Development',
   },
   {
    id:4,
    image: research,
    title: 'Research',
   },
];


return (  
  <Section 
  title="Services " 
  subtitle="Here are all the services that I provide to my clients. I hope I offer
  the service that you ae looking for.">

   <div className='grid gap-10 lg:grid-cols-2'> 
      {services.map(({id, image, title}) => (   
    <div 
        key={id} 
        className='flex flex-col items-center justify-center p-5 shadow-lg 
        dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110'
        >
           
        <img 
           src={image} 
           alt={title} 
           className='w-36 h-36 md:w-44 md:h-44'
        />
        <h3 className='mt-5 text-base'>{title}</h3>   
        </div>
      ))}
   </div>
  </Section>
  );
};

export default Services;