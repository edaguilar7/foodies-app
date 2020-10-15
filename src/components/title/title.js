import React from 'react';
import './title.css';
import PropTypes from 'prop-types';

const Title = ({ 
    theme,
    fontSize, 
    text 
}) => (
        <h1 
            {...fontSize && { style: { fontSize } }} 
            className={`custom-title custom-title--${theme === 'dark' ? 'dark' : 'light'} : ''}`}
        >
            { text }
        </h1>
);

Title.propTypes = {
    theme: PropTypes.string,
    fontSize: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Title
