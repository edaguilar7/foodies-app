import React from 'react';
import './subTitle.css';
import PropTypes from 'prop-types';

const SubTitle = ({ style, text, hasArrow }) => (
    <h2 {...style && { style } } className="sub-title">
        {text}
        {
            hasArrow && <span className="sub-title__arrow" />
        }
    </h2>
);

SubTitle.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    hasArrow: PropTypes.bool
}

export default SubTitle;
