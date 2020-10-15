import React from 'react'
import { Header, LandingInfo } from '../../components';

const Home = () => {
    return (
        <>
            <Header />
            <main style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                <LandingInfo />
            </main>
        </>
    )
}

export default Home