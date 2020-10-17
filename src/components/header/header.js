import React, { useState } from 'react';
import Drop from '../../assets/img/yellow-drop.svg';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className={`menu ${isOpen ? 'open' : ''}`}>
                <h1 className="menu__main">
                    <Link className="menu__link" to={'/'}>Foodies</Link>
                </h1>
                <ul className="menu__options">
                    <li className="menu__item">Acerca de</li>
                    <li className="menu__item">Restaurantes</li>
                    <li className="menu__item">
                        <Link className="menu__link" to={'/menu'}>Menú</Link>
                    </li>
                    <li className="menu__item">Contáctanos</li>
                </ul>
                <span onClick={() => setIsOpen(!isOpen)} className="menu__sideBar"></span>
            </header>
            <img className="drop" src={Drop} alt='hamburger logo' />
        </>
    )
}

export default Header
