import React from 'react';
import './waves.css';

export default function Waves({ styles, src }) {
	return <img className={`noselect ${styles}`} src={src} alt='' />;
}
