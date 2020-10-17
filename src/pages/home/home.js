import React from 'react'
import { Header, LandingInfo, AboutUs, Brands, Opinions, ContactUs, Benefits, Footer } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <LandingInfo />
                <AboutUs />
                <Brands />
                <Opinions />
                <ContactUs />
                <Benefits />
                <Footer />
            </main>
        </>
    )
}

export default Home