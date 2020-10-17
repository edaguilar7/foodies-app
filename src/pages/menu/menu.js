import React from 'react';
import { Header } from '../../components';
import { Title, Dishes } from '../../components';
import Hamburger from '../../assets/img/hero_hamburger.svg';
import './menu.css';

const Menu = () => {
    return (
        <>
            <Header />
            <main>
                <section className="info">
                    <div className="info__titles">
                        <Title text={'Cada sabor'} />
                        <Title text={'es una nueva'} />
                        <Title text={'experiencia'} />
                    </div>
                    <img  className="info__picture" src={Hamburger} alt="Hero hamburger" />
                </section>
                <Dishes />
            </main>
        </>
    )
}

export default Menu
