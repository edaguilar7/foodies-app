import React, { useState, useEffect } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { ContactForm, InfoGroup, Thanks, Loading } from '../';
import { saveOpinion  } from '../../services/paths';
import { processResponse } from '../../helpers';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './contact-us.css';

const ContactUs = () => {
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const createOpinion = async(isFormValid, payload) => {
        if(!isFormValid) return false;
        try {
            setLoading(true);
            const response = await axios.post(saveOpinion(), payload);
            const result = processResponse(response);
            if(result.ok) setIsSent(true);
        } catch (error) {
            console.log("createOpinion -> error", error)
            NotificationManager.error(`Ocurrió un error durante la operación.`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="contact-us">
            {
                !isSent 
                ? (
                    <>
                        <InfoGroup
                            title={"Cuentanos tu experiencia"}
                            description={"Don't miss out on our great offers & Receive deals from all ourtop restaurants via e-mail."}
                        />
                        <ContactForm loading={loading} getSubmitResponse={createOpinion} />
                    </>
                )
                : (
                    <>
                        <Thanks />
                        <Link to={'/menu'}>
                            <button className="contact-us__goTo">Conoce nuestro menu</button>
                        </Link>
                    </>

                )
            }
            <NotificationContainer />
        </section>
    )
}

export default ContactUs
