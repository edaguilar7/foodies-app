import React from 'react';
import './paragraph.css';

const Paragraph = ({ text }) => {
    return (
        <p className="paragraph">
            {text}  
        </p>
    )
}

export default Paragraph
