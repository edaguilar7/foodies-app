import React from 'react';
import './location-not-found.css';
import NotFound from '../../assets/img/location-404.svg';

const locationsNotFound = () => {
    return (
        <div className="not-found">
            <img className="not-found__picture" src={NotFound} alt='Not found' />
            <label className="not-found__description">No hemos encontrado lo <br /> que buscas</label>
        </div>
    )
}

export default locationsNotFound
