import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTittle from '../../../Hooks/useTittle';

const EditReview = () => {
    const review = useLoaderData();
    const [editText, setEditText] = useState('');
    useTittle('Edit Review');

    const update = (event) => {
        event.preventDefault();
        // const form = event.target;
        // const editedReview = form.edited.value;

        const body = { review: editText, id: review._id };

        fetch('https://photogallery-server-site.vercel.app/update', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Review Edited')

            })
    }
    return (
        <div className='flex justify-center p-5 '>
            <div className=' w-3/4 bg-lime-300 p-5 rounded'>
                <div >
                    <form onSubmit={update}>
                        <label className="label">
                            <span className="label-text font-bold text-xl">Edit</span>
                        </label>
                        <input onChange={(e) => setEditText(e.target.value)} type="text" name="edited" className='input input-bordered' id="" value={editText ? editText : review.review} /><br />
                        <div className='py-5'>
                            <input type="submit" value="Update" className='input input-bordered' />
                        </div>

                    </form>
                </div>

            </div>
        </div>

    );
};

export default EditReview;