import React from 'react';
import './benefits.css';
import { Title, BenefitItem } from '../';
import Mobile from '../../assets/img/new.svg';

const Benefits = () => {
    return (
        <section className="benefits">
            <img className="benefits__picture" src={Mobile} alt='Benefits' />
            <div className="benefits__info">
                <Title
                    // style={}
                    text={<>{'Obten más beneficios'}<br/>{'Descarga nuestra App'}</>}
                    theme="light"
                />
                <div className="benefits__items">
                    <BenefitItem 
                        number={'01'}
                        description={'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.'}
                        title={'Solicita rápido'}
                    />
                    <BenefitItem 
                        number={'02'}
                        description={'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.'}
                        title={'Fácil de Usar'}
                    />
                    <BenefitItem 
                        number={'03'}
                        description={'Curabitur in eleifend turpis, id vehicula odio. Donec pulvinar tellus eget magna aliquet ultricies.'}
                        title={'Promociones especiales'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Benefits
