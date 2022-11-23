import React from 'react';
import img1 from '../Home/images/section/img1.jpg'
import img2 from '../Home/images/section/img2.jpg'
import img3 from '../Home/images/section/img3.jpg'
import img4 from '../Home/images/section/img4.jpg'
import img5 from '../Home/images/section/img5.jpg'
import img6 from '../Home/images/section/img6.jpg'



const BestSection = () => {
    return (
        <div className='flex justify-center pt-10'>
            <div className='bg-base-100 m-3 rounded' >
                <p className='text-5xl font-bold text-lime-700 flex justify-center'>Some of my clicks</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5'>
                    <img src={img1} alt="" className='h-96 w-96 p-2' />
                    <img src={img2} alt="" className='h-96 w-96 p-2' />
                    <img src={img3} alt="" className='h-96 w-96 p-2' />
                    <img src={img4} alt="" className='h-96 w-96 p-2' />
                    <img src={img5} alt="" className='h-96 w-96 p-2' />
                    <img src={img6} alt="" className='h-96 w-96 p-2' />
                </div>


            </div>
        </div>

    );
};

export default BestSection;