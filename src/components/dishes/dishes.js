import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getCategories, getMenu } from '../../services/paths';
import { FormControl, Container, Row } from 'react-bootstrap';
import { DishCard } from '../';
import {  processResponse } from '../../helpers';
import axios from 'axios';
import './dishes.css';

const Dishes = () => {
    const [categoriesList, setCategoriesList] = useState(false);
    const [menuList, setMenuList] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [valueToSearch, setValueToSearch] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCategoriesList();
    }, []);

    useEffect(() => {
        getMenuList();
    }, [selectedCategory, valueToSearch]);

    const getCategoriesList = async() => {
        setLoading(true);
        try {
            const response = await axios.get(getCategories());
            const result = processResponse(response); 
            if(result.ok) setCategoriesList(result.payload);
        } catch (error) {
            console.log("getCategoryList -> error", error);
            NotificationManager.error(`Ocurrió un error durante la operación.`);
        } finally {
            setLoading(false);
        }
    }

    const getMenuList = async() => {
        try {
            setMenuList([]);
            const response = await axios.get(getMenu(selectedCategory, encodeURI(valueToSearch || '')));
            const result = processResponse(response);
            if(result.ok) setMenuList(result.payload);
        } catch (error) {
            console.log("getCategoryList -> error", error);
            NotificationManager.error(`Ocurrió un error durante la operación.`);
        } finally {
            setLoading(false);
        }
    }

    const handleChange = evt => {
        const { value } = evt.target;
        setValueToSearch(value);
    }

    return (
        <section className="dishes">
            <div className="dishes__params">
                <FormControl 
                    placeholder="Buscar"
                    style={{ width: '300px' }}
                    value={valueToSearch}
                    onChange={handleChange}
                />

                <div className="dishes__options">
                    <label key={0} onClick={() => setSelectedCategory(null)} className="dishes__category">Todas</label>
                    {
                        categoriesList && categoriesList.map(({ id, name }) => 
                        (<label key={id} onClick={() => setSelectedCategory(id)} className="dishes__category">{name}</label>)
                    )}
                </div>
            </div>

            <div className="dishes__cards">
                {
                    menuList && menuList.map(({
                        category,
                        description,
                        id,
                        image,
                        name,
                        price
                    }) => (
                        <DishCard 
                            key={id}
                            image={image}
                            title={name}
                            description={description}
                            price={price}
                            category={category}
                        />
                    ))
                }
            </div>
            <NotificationContainer />
        </section>
    )
}

export default Dishes
