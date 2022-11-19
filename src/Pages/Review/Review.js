import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/Authprovider';
import MyReview from './MyReview';

const Review = () => {
    const {user} = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setMyreviews(data);
        })
    },[])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
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
                myreviews.map(myreview => <MyReview
                    key={myreview._id}
                    myreview = {myreview}
                    handleDelete = {handleDelete}
                ></MyReview>)
            }
        </div>
    );
};

export default Review;