import React from 'react';
import './paragraph.css';
import PropTypes from 'prop-types';

const Paragraph = ({ text, style }) => {
    return (
        <p {...style && { style }} className="paragraph">
            {text}  
        </p>
    )
}

Paragraph.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
}

export default Paragraph
