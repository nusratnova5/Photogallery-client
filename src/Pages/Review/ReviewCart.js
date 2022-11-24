import React from 'react';

const ReviewCart = ({ review }) => {
    return (
        <div className='bg-lime-200 w-100 p-5'>
           
            <div className='flex p-5 bg-lime-100'>
                <img src={review.photo} alt='' className='h-8 w-8 ' />
                <div className='px-5'>{review.name}</div>
            </div>
            <div className='bg-lime-50'>
            <span className='font-bold'>Review:</span>{review.review}
            </div>
            
            
        </div>
    );
};

export default ReviewCart;