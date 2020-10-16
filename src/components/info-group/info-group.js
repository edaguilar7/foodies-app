import React from 'react';
import './info-group.css';

const InfoGroup = ({ title, description}) => {
    return (
        <div className="info-group">
            <h2 className="info-group__title">{title}</h2>
            <p className="info-group__description">{description}</p>
        </div>
    )
}

export default InfoGroup