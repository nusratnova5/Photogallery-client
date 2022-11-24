import React, { useEffect, useState } from 'react';
import useTittle from '../../Hooks/useTittle';
import ServiceCard from './ServiceCard';

const Services = () => {
    useTittle('Services');
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://photogallery-server-site.vercel.app/services')
        .then (res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lime-300'>
            {
            services.map(service=><ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
           }
            </div>
    );
};

export default Services;