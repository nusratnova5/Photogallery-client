import React from 'react';
import img from '../Home/images/Me/me.jpg'

const AboutMe = () => {
    return (
        <div className='flex justify-center p-5'>
            <div className="card lg:card-side bg-base-100 shadow-xl items-center w-3/4 ">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body w-3/4">
                    <h2 className="card-title text-3xl">A little bit more about me</h2>
                    <p className='text-lg'>Hey ,this is Nova.I am a photographer based in Dhaka.I have loved photography when I was a teenager.Now I take this passion as my profession.I photograph almost every genre of photography.You bring the smile and I'll do the rest.</p>
                    <p className='text-2xl text-lime-700 font-bold'>Let's have fun together.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;