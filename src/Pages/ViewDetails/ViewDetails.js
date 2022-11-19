import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';

const ViewDetails = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const email = user?.email;
        const newReview = {
            service: service._id,
            serviceName: service.name,
            userEmail: email,
            review: review,
        }
        console.log(newReview);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledge){
                alert('Review Submitted');
                form.reset();
            }
        })
    }
    return (
        <div>
            <h2>{service.name}</h2>
            {
                user?.email ?
                <>
                    <form onSubmit={handleReview}>
                        <input type="text" name="review" id="" placeholder='Enter your review'/>
                        <input type="submit" value="Submit Your Review" />
                    </form>
                </>
                :
                <>
                    <Link to='/login'><button className='btn'>Log In To Give Review</button></Link>
                </>
            }
        </div>
    );
};

export default ViewDetails;