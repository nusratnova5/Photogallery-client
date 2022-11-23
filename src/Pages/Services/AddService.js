import React from 'react';

const AddService = () => {
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const details = form.details.value;
        const price = form.price.value;

        const newService = {
            name,
            image,
            details,
            price
        }

        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service Added');
                    form.reset();
                }
            })
    }
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl  bg-lime-200 ">
                <form onSubmit={handleAddService}>
                    <div className='p-2'>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" id="" placeholder='Enter name' className="input input-bordered p-2" /> <br />
                    </div>
                    <div className='p-2'>
                    <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" id="" placeholder='Enter image' className="input input-bordered p-2" /> <br />
                    </div>
                    <div className='p-2'>
                    <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" name="details" id="" placeholder='Enter details' className="input input-bordered" /> <br />
                    </div>
                    <div className='p-2'>
                    <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" id="" placeholder='Enter price' className="input input-bordered" /> <br />
                    </div>
                    <div className='p-2'>
                        <input type="submit" value="Add Service" className="input input-bordered" />
                    </div>




                </form>
            </div>

        </div>


    );
};

export default AddService;