import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = ({ myreview, handleDelete }) => {

    return (
        <div className='flex justify-center bg-lime-300'>
            <div className='w-3/4 p-5'>
            <div className='p-5 bg-lime-200'>
                {myreview.review}
            </div>
            <div className='flex '>
                <div className='p-3' >
                    <button onClick={() => handleDelete(myreview._id)} className='btn btn-outline'>Delete</button>
                </div>
                <div className='p-3'>
                    <Link to={`/editReview/${myreview._id}`}><button className='btn btn-outline'>Edit</button></Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default MyReview;