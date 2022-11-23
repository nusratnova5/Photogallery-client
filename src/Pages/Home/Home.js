import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTittle from '../../Hooks/useTittle';
import ServiceCard from '../Services/ServiceCard';
import AboutMe from './AboutMe';
import Banner from './Banner';
import BestSection from './BestSection';

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/home')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <div className='bg-lime-300'>
      <Banner></Banner>
      <div className='flex justify-center bg-lime-300'>
        <div className='bg-base-100 w-3/4 rounded '>
          <div className='flex justify-center bg-slate-100'>
            <p className='text-5xl font-bold text-lime-700'>Welcome to my Services</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 bg-slate-100'>
            {
              services.map(service => <ServiceCard
                key={service._id}
                service={service}
              ></ServiceCard>)
            }
          </div>
          <div className='flex justify-center p-5'>
            <Link to='/services'><button className="btn-outline rounded btn-ghost">See All Services</button></Link>
          </div>

        </div>
      </div>
      <AboutMe></AboutMe>
      <BestSection></BestSection>
    </div>
  );
};

export default Home;