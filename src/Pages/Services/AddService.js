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
            if(data.acknowledged){
                alert('Service Added');
                form.reset();
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddService}>
                <input type="text" name="name" id="" placeholder='Enter name'/> <br />
                <input type="text" name="image" id="" placeholder='Enter image'/> <br />
                <input type="text" name="details" id="" placeholder='Enter details'/> <br />
                <input type="text" name="price" id="" placeholder='Enter price'/> <br />
                <input type="submit" value="Add Service" />
            </form>
        </div>
    );
};

export default AddService;