import React, { useState } from 'react';
import './brands.css';
import { BranchCard } from '../';
import { Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
// import { Map } from '../';

const Brands = props => {
    const [activeKey, setActiveKey] = useState('takeAway');

    return (
        <section className="brands">
            <div className="brands__items">
                <h2 className="brands__title">Estamos para ti</h2>
                <Tabs defaultActiveKey={'delivery'} onSelect={tab => setActiveKey(tab)} >
                    <Tab 
                        eventKey={'takeAway'} 
                        title={'Para llevar'}
                    />
                    <Tab 
                        eventKey={'delivery'} 
                        title={'Domicilio'}
                    />
                </Tabs>
                <InputGroup className="brands__search">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Buscar</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Buscar nombre o dirección"
                    aria-label="sucursal"
                    aria-describedby="basic-addon1"
                    onChange={e => console.log(e.target.value)}
                    />
                </InputGroup>

                <div className="brands__cards">
                    <BranchCard 
                        isActive={false}
                        location={'Calle la Reforma #543, Colonia San Benito'}
                        name={'Sucursal San Benito'}
                        schedule={'Abierto de 12:00 m.d. - 9:00 p.m.'}
                    />

                    <BranchCard 
                        isActive={true}
                        location={'Calle la Reforma #543, Colonia San Benito'}
                        name={'Sucursal San Benito'}
                        schedule={'Abierto de 12:00 m.d. - 9:00 p.m.'}
                    />
                </div>
            </div>
            <div className="brands__map">
                <span>Mi mapa</span>
                {/* <Map 
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                /> */}
            </div>
        </section>
    )
}

export default Brands
