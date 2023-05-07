import React from 'react';
import './stiple-image.css';

export default function Image1({ currentScreen, src }) {
	return (
		<img
			className={`stiple-img noselect stiple-img-${currentScreen}`}
			src={src}
			alt=''
		/>
	);
}
