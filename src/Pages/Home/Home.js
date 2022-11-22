import React from 'react';
import useTittle from '../../Hooks/useTittle';
import AboutMe from './AboutMe';
import Banner from './Banner';

const Home = () => {
    
    return (
        <div className='bg-lime-200'>
          <Banner></Banner>
          <AboutMe></AboutMe>
        </div>
    );
};

export default Home;