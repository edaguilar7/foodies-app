import React from 'react';
import { SubTitle, Paragraph } from '../';
import './about-us.css';

const AboutUs = () => {
    return (
        <section className="about-us">
            <span className="about-us__aside">
                <label className="about-us__aside-text">LA COMIDA ES</label>
                <label className="about-us__aside-text about-us__aside-text--terciary">NUESTRO ARTE</label>
            </span>
            <span className="about-us__descriptions">
                <SubTitle
                    style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto' }}
                    text={'¿Quién es Foodies?'} 
                />
                <Paragraph 
                    style={{ width: '90%', margin: '1em auto' }}
                    text={'Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit dolore culpa irure eiusmod minim occaecat et id minim ullamco. '} 
                />
                <SubTitle
                    hasArrow
                    style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto' }}
                    text={'Contáctanos'} 
                />
            </span>
        </section>
    )
}

export default AboutUs
