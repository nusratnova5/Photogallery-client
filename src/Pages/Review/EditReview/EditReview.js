import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const review = useLoaderData();
    const [editText, setEditText] = useState('');

    const update = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const editedReview = form.edited.value;

        const body = {review: editText, id: review._id};

        fetch('http://localhost:5000/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
            alert('Review Edited')

        })
    }
    return (
        <div>
            <form onSubmit={update}>
                <input onChange={(e)=> setEditText(e.target.value)} type="text" name="edited" id="" value={editText?editText:review.review}/><br />
                <input type="submit" value="Submit Edit" />
            </form>
        </div>
    );
};

export default EditReview;