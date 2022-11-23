import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
  const { _id, name, price, image, details } = service;
  return (
    <div className='m-5'>
      <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
        <figure>
        <PhotoProvider>
      <PhotoView src={image}>
        <img src={image} alt="Shoes" />
      </PhotoView>
    </PhotoProvider>
          {/* <img src={image} alt="Shoes" />*/}</figure> 
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}><button className="btn btn-primary">View details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;