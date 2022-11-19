import React from 'react';
import { Link } from 'react-router-dom';

const MyReview = ({myreview, handleDelete}) => {

    return (
        <div>
            {myreview.review}
            <button onClick={() => handleDelete(myreview._id)} className='btn'>Delete</button>
            <Link to={`/editReview/${myreview._id}`}><button className='btn'>Edit</button></Link>
        </div>
    );
};

export default MyReview;