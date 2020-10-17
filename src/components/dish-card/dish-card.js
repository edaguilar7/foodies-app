import React, { memo } from 'react';
import { Card, Button } from 'react-bootstrap';
import './dish-card.css';

const DishCard = ({ image, title, description, price, category }) => {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{ height: '100px' }}>{description}</Card.Text>
                <div className="card__footer">
                    <label className="card__footer__category">{category}</label>
                    <label className="card__footer__price">{price}</label>
                </div>
            </Card.Body>
        </Card>
    )
}

export default memo(DishCard);
