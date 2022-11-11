import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,name,price,image,details}=service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <Link to={`/viewdetails/${_id}`}><button className="btn btn-primary">View details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;