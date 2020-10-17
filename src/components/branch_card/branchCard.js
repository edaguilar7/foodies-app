import React, { memo, useState } from 'react';
import './branch_card.css';

const BranchCard = ({ name, schedule, location, handlerHover }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsActive(true);
        handlerHover && handlerHover();
    }

    const handleMouseOut = () => (setIsActive(false));

    return (
        <div 
            onMouseOver={handleMouseEnter}
            onMouseOut={handleMouseOut}
            className={`branch-card ${ isActive ? 'branch-card--active' : ''}`}
        >
            <h3 className="branch-card__name">{name}</h3>
            <h4 className="branch-card__schedule">{schedule}</h4>
            <h4 className="branch-card__location">{location}</h4>
        </div>
    )
}

export default memo(BranchCard);
