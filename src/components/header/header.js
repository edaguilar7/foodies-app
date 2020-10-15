import React, { useState } from 'react';
import './header.css';
import Drop from '../../assets/img/yellow-drop.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className={`menu ${isOpen ? 'open' : ''}`}>
                <h1 className="menu__main">Foodies</h1>
                <ul className="menu__options">
                    <li className="menu__item">Acerca de</li>
                    <li className="menu__item">Restaurantes</li>
                    <li className="menu__item">Menú</li>
                    <li className="menu__item">Contáctanos</li>
                </ul>
                <span onClick={() => setIsOpen(!isOpen)} className="menu__sideBar"></span>
            </header>
            <img className="drop" src={Drop} alt='hamburger logo' />
        </>
    )
}

export default Header
