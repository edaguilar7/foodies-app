import React, { useState } from 'react';
import './contact-form.css';
import { Form, Button } from 'react-bootstrap';

const { Group, Label, Control } = Form
const { Feedback } = Control
const ContactForm = ({ getSubmitResponse, loading }) => {
    const [validated, setValidated] = useState(false);
    const [values, setValues] = useState({
        name: null,
        email: null,
        message: null
    })

    const handleSubmit = (event) => {
        console.log(event);
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        getSubmitResponse(form.checkValidity(), {...values });
        setValidated(true);
    }

    const handleChange = evt => {
        const { value, name } = evt.target;
        setValues({ ...values, [name]: value });
    }

    const { email, message, name } = values;
    return (
        <Form className="contact-form" noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="contact-form__left">
                <Group controlId="completeName">
                    <Label>Nombre y apellido</Label>
                    <Control
                        required
                        name="name"
                        type="text"
                        placeholder="Mi nombre es"
                        defaultValue=""
                        value={name}
                        onChange={handleChange}
                    />
                    <Feedback></Feedback>
                </Group>
                <Group controlId="email">
                    <Label>Correo electrónico</Label>
                    <Control
                        required
                        name="email"
                        type="email"
                        defaultValue=""
                        placeholder="Mi correo electrónico es"
                        value={email}
                        onChange={handleChange}
                    />
                    <Feedback></Feedback>
                </Group>
            </div>
            <div className="contact-form__right">
                <Group controlId="mensaje">
                    <Label>Mensaje</Label>
                    <Control
                        name="message"
                        required
                        type="text"
                        placeholder="El día de ahora mi experiencia fue..."
                        as="textarea"
                        rows={4}
                        value={message}
                        onChange={handleChange}
                    />
                    <Feedback></Feedback>
                </Group>
            </div>
            <div className="contact-form__bottom">
                <Button type="submit">{ loading ? 'Enviando comentarios...' : ' Enviar comentarios'}</Button>
            </div>
        </Form>
    )
}

export default ContactForm
