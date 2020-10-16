import React from 'react';
import { ContactForm, InfoGroup } from '../';
import './contact-us.css';

const ContactUs = () => {

    return (
        <section className="contact-us">
            <InfoGroup
                title={"Cuentanos tu experiencia"}
                description={"Don't miss out on our great offers & Receive deals from all ourtop restaurants via e-mail."}
            />
            <ContactForm />
        </section>
    )
}

export default ContactUs
