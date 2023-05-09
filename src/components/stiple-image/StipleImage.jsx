import './stiple-image.css';

import PropTypes from 'prop-types';
import React from 'react';

function StipleImage({ currentScreenName, src }) {
	return (
		<img
			className={`stiple-img noselect stiple-img-${currentScreenName}`}
			src={src}
			alt='Background art'
		/>
	);
}

StipleImage.propTypes = {
	currentScreenName: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
};

export default StipleImage;
