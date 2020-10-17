import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Tabs, Tab, InputGroup, FormControl } from 'react-bootstrap';
import { processResponse, getFormattedHour } from '../../helpers';
import { getLocations } from '../../services/paths';
import { BranchCard, Loading, LocationNotFound, Map } from '../';
import Search from '../../assets/img/search.svg';
import axios from 'axios';
import './brands.css';

const Brands = (props) => {
    const [locations, setLocations] = useState([]);
    const [activeKey, setActiveKey] = useState('takeAway');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(false);
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

    useEffect(() => {
        if (activeKey) handleSearch();
    }, [searchText, activeKey])

    /**
     * Handler thats triggered when the user writes into the search input
     * @param {*} evt event object
     */
    const handleChange = (evt) => {
        const { value } = evt.target
        setSearchText(value)
    }

    /**
     * Handler thats triggered when the tab component changes
     * @param {*} tab Tab that was chosen
     */
    const handleTabChange = (tab) => {
        setActiveKey(tab)
        setSearchText('')
    }

    /**
     * Fetch locations data
     */
    const handleSearch = async () => {
        try {
            setLoading(true)
            setLocations([])
            const response = await axios.get(
                getLocations(activeKey.toLowerCase(), encodeURI(searchText || ''))
            )
            const result = processResponse(response);
            if (result.ok) setLocations(result.payload);
        } catch (error) {
            console.log('handleSearch -> error', error);
            NotificationManager.error(`Ocurrió un error durante la operación.`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="brands">
            <div className="brands__items">
                <h2 className="brands__title">Estamos para ti</h2>
                <Tabs defaultActiveKey={'takeAway'} onSelect={handleTabChange}>
                    <Tab eventKey={'takeAway'} title={'Para llevar'} />
                    <Tab eventKey={'delivery'} title={'Domicilio'} />
                </Tabs>
                <InputGroup className="brands__search">
                    <InputGroup.Prepend>
                        <InputGroup.Text
                            className="input-addon"
                            id="basic-addon1"
                        >
                            <img src={Search} alt="Search a location" />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        className="input-search"
                        placeholder="Buscar nombre o dirección"
                        aria-label="sucursal"
                        aria-describedby="basic-addon1"
                        onChange={handleChange}
                        value={searchText}
                    />
                </InputGroup>

                <div className="brands__cards">
                    <Loading isLoading={loading}>
                        {locations && locations.length ? (
                            locations.map(
                                ({
                                    id,
                                    name,
                                    opening_time,
                                    closing_time,
                                    address,
                                    latitude,
                                    longitude,
                                }) => (
                                    <BranchCard
                                        handlerHover={() => setCoordinates({ lat: latitude, lng: longitude })}
                                        location={address}
                                        name={name}
                                        schedule={`Abierto de ${getFormattedHour(
                                            opening_time,
                                            'hh:mm A'
                                        )} - ${getFormattedHour(
                                            closing_time,
                                            'hh:mm A'
                                        )} `}
                                        key={id}
                                    />
                                )
                            )
                        ) : (
                            <LocationNotFound />
                        )}
                    </Loading>

                    <NotificationContainer />
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
