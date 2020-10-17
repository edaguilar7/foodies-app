import React, { useRef, useState, useEffect } from 'react';
import { Title, Paragraph } from '../';
import './opinions.css';
import ReactSwipe from 'react-swipe';
import LeftRedDrop from '../../assets/img/left-red-drop.svg';
import RightRedDrop from '../../assets/img/right-red-drop.svg';
import Ketchup from '../../assets/img/ketchup.svg';
import Arrow from '../../assets/img/arrow.svg';

const Opinions = () => {
    const carouselRef = useRef();
    const [ feedbackList, setFeedBackList ] = useState([]);
    const [ activeKey, setActiveKey ] = useState(0);

    useEffect(() => {
        fectchFakeRequest(5);
    }, []);

    const handleChange = number => {
        setActiveKey( activeKey + number );
        carouselRef.current[number < 0 ? 'prev' : 'next']();
    }

    const fectchFakeRequest = n => {
        const title = '“El mejor lugar para degustar en familia y amigos!”';
        const description = 'Es el mejor lugar al que he venido con mi familia, la comida es rica, sirven rápido y te atienden de la mejor manera.';
        let feedBacks = [];
        for(let i = 0; i < n; i++) {
            feedBacks = [...feedBacks, { title, description }];
        }
        setFeedBackList(feedBacks);
        setActiveKey(1);
    }

    const { length: feedBackLength } = feedbackList;
    return (
        <section className="opinions">
            <img
                className="opinions__left-drop"
                src={LeftRedDrop}
                alt="Illustrative aims"
            />

            {
                feedBackLength && (
                    <div className="opinions__carousel-box">
                        <ReactSwipe
                            className="opinions__carousel"
                            swipeOptions={{ continuous: false }}
                            ref={carouselRef}
                        >
                            {
                                feedbackList.map(({ title, description }, index) => (
                                    <div key={index} style={{ width: '100%' }}>
                                        <Title style={{ maxWidth: '744px', textAlign: 'center' }} text={title} />
                                        <Paragraph style={{ maxWidth: '490px', textAlign: 'center', margin: 'auto', marginTop: '20px' }} text={description} />
                                    </div>
                                ))
                            }
                        </ReactSwipe>
                        <div className="opinions__actions">
                            <button onClick={() => activeKey > 1 && handleChange(-1)}>
                                <img  className={activeKey <= 1 ? 'limit' : ''} src={Arrow} alt='Previous' />
                            </button>
                            <label>{activeKey} / {feedBackLength}</label>
                            <button onClick={() => activeKey !== feedBackLength && handleChange(1)}>
                                <img className={activeKey === feedBackLength ? 'limit' : ''} src={Arrow} alt='Next' />
                            </button>
                        </div>
                    </div>
                )
            }

            <img
                className="opinions__ketchup"
                src={Ketchup}
                alt="Illustrative aims"
            />
            <img
                className="opinions__right-drop"
                src={RightRedDrop}
                alt="Illustrative aims"
            />
        </section>
    )
}

export default Opinions
