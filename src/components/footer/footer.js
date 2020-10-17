import React from 'react';
import PlayStore from '../../assets/img/play_store.svg';
import AppStore from '../../assets/img/app_store.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__stores">
                <h3>Foodies</h3>
                <div className="footer__pictures">
                    <img src={AppStore} alt="App store" />
                    <img src={PlayStore} alt="Play store" />
                </div>
            </div>
            <ul className="footer__options">
                <li className="footer__item">Conoce nuestras sucursales</li>
                <li className="footer__item">Acerca de</li>
                <li className="footer__item">Conoce nuestras sucursales</li>
                <li className="footer__item">¿Qué hablan de nosotros?</li>
                <li className="footer__item">Contáctanos</li>
            </ul>
        </div>
    )
}

export default Footer
