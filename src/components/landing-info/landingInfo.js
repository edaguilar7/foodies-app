import React from 'react';
import './landingInfo.css';
import { Title, Paragraph } from '../index';
import Hamburger from '../../assets/img/hamburger.svg';

const LandingInfo = () => {
    return (
        <section className="landing-info">
            <div className="landing-info__marketing">
                <Title 
                    fontSize={'60px'}
                    theme={'light'}
                    text={'Un nuevo sabor está en la ciudad'}
                />
                <Paragraph
                    text={'Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.'}
                />
            </div>
            <div className="landing-info__picture-box">
                <img className="landing-info__picture" src={Hamburger} alt='Our service!' />
            </div>
        </section>
    )
}

export default LandingInfo