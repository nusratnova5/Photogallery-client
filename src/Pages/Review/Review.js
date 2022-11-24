import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';
import useTittle from '../../Hooks/useTittle';
import MyReview from './MyReview';

const Review = () => {
    let show;
    const {user} = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);
    if(myreviews.length>0){
        show=true;
    }
    else{
        show=false;
    }
    useTittle('Review');

    useEffect(() => {
        fetch(`https://photogallery-server-site.vercel.app/reviews?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyreviews(data);
        })
    },[])

    const handleDelete = (id) => {
        fetch(`https://photogallery-server-site.vercel.app/reviews/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount>0){
                alert('Deleted Succecssfully');
                const remaining = myreviews.filter(myreview => myreview._id !== id);
                console.log(remaining);
                setMyreviews(remaining);
            }
        })
    }
    return (
        <div>
            {
                show
                ?
                <>
                {
                myreviews.map(myreview => <MyReview
                    key={myreview._id}
                    myreview = {myreview}
                    handleDelete = {handleDelete}
                ></MyReview>)
                }
                </>
                :
                <h2 className='text-5xl text-center text-lime-500 p-5'>No review</h2>
                
            }
        </div>
    );
};

export default Review;