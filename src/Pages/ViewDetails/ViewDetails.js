import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import useTittle from '../../Hooks/useTittle';
import ReviewCart from '../Review/ReviewCart';

const ViewDetails = () => {
    useTittle('Details');
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, price, image, details } = service;

    const [reviews,setReviews]=useState();
    useEffect(()=>{
        fetch(`https://photogallery-server-site.vercel.app/reviews?id=${_id}`)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)
        })
    },[])

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
            photo: user.photoURL,
            name: user.displayName,
        }
        console.log(newReview);

        fetch('https://photogallery-server-site.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Review Submitted');
                    const newReviews = [newReview,...reviews]
                setReviews(newReviews);
                    form.reset();
                }
            })
    }
    return (
        <div className='flex justify-center  mt-5'>
            <div className=''>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>
                    </div>
                </div>
                <div className='grid grid-cols-6 gap-4 my-5'>
                    {
                        user?.email ?
                            <>
                                <div className='bg-lime-200 rounded col-span-2 '>
                                    <form onSubmit={handleReview}>
                                        <div className='m-5'>
                                            <label className="label">
                                                <span className="label-text font-bold">Feedback</span>
                                            </label>
                                            <input type="text" name="review" id="" placeholder='Enter your review' className='input input-bordered' />
                                        </div>
                                        <div className='p-5'>
                                            <input type="submit" className='input input-bordered' value="Submit Your Review" />
                                        </div>

                                    </form>
                                </div>
                                <div className='col-span-3'>
                                {
                                    reviews?.map(review=><ReviewCart
                                        key={review._id}
                                        review={review}
                                    ></ReviewCart>)
                                }
                                </div>
                                
                                
                                
                            </>
                            :
                            <>
                                <Link to='/login'><button className='btn'>Log In To Give Review</button></Link>
                            </>
                    }
                </div>
            </div>
        </div>


    );
};

export default ViewDetails;