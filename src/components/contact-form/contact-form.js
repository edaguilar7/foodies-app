import React, { useState } from 'react';
import './contact-form.css';
import { Form, Button } from 'react-bootstrap';

const { Group, Label, Control } = Form
const { Feedback } = Control
const ContactForm = () => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        setValidated(true)
    }

    return (
        <Form className="contact-form" noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="contact-form__left">
                <Group controlId="completeName">
                    <Label>Nombre y apellido</Label>
                    <Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                    <Feedback></Feedback>
                </Group>
                <Group controlId="email">
                    <Label>Correo electrónico</Label>
                    <Control
                        required
                        type="email"
                        placeholder="j.doe@correo.com"
                        defaultValue="Mark"
                    />
                    <Feedback></Feedback>
                </Group>
            </div>
            <div className="contact-form__right">
                <Group controlId="mensaje">
                    <Label>Mensaje</Label>
                    <Control
                        required
                        type="text"
                        placeholder="El día de ahora mi experiencia fue..."
                        as="textarea"
                        rows={4}
                    />
                    <Feedback></Feedback>
                </Group>
            </div>
            <div className="contact-form__bottom">
                <Button type="submit">Enviar comentarios</Button>
            </div>
        </Form>
    )
}

export default ContactForm
