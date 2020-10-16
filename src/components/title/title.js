import React from 'react';
import './title.css';
import PropTypes from 'prop-types';

const Title = ({ 
    theme,
    style, 
    text 
}) => (
        <h1 
            {...style && { style } } 
            className={`custom-title custom-title--${theme === 'dark' ? 'dark' : 'light'} : ''}`}
        >
            { text }
        </h1>
);

Title.propTypes = {
    theme: PropTypes.string,
    style: PropTypes.object,
    text: PropTypes.string.isRequired
}

export default Title
