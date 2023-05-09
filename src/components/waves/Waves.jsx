import './waves.css';

import React from 'react';

export default function Waves({ styles, src }) {
	return <img className={`noselect ${styles}`} src={src} alt='' />;
}
