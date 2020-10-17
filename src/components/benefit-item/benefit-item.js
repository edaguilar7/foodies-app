import React from 'react';
import './benefit-item.css';

const benefitItem = ({ number, title, description }) => {

    return (
        <div className="benefit">
            <span className="benefit__number">{number}</span>
            <h3 className="benefit__title">{title}</h3>
            <p className="benefit__description">{description}</p>
        </div>
    )
}

export default benefitItem;
