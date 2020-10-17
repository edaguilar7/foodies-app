import React from 'react';
import Icon from '../../assets/img/thanks.svg';
import './thanks.css';

const Thanks = () => {
    return (
        <div className="thanks">
            <img className="thanks__picture" src={Icon} alt='Gracias' />
            <h4 className="thanks__title">Gracias por tus comentarios</h4>
            <p className="thanks__description">Don't miss out on our great offers & Receive deals from all our top restaurants via e-mail.</p>
        </div>
    )
}

export default Thanks