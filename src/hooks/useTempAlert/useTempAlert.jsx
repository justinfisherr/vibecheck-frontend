import React, { useState, useEffect } from 'react';
import './temp-alert.css';
import exclamation from '../../images/circle-exclamation-solid.svg';

export default function useTempAlert() {
	const [tempAlertActive, setActive] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			setActive('');
		}, 2000);
		return () => clearTimeout(timer);
	}, [tempAlertActive]);

	return [
		<div className='temp-wrapper'>
			<div className='check-wrapper'>
				<img src={exclamation} alt='' />
			</div>
			<p className='temp-alert'>{tempAlertActive}</p>
		</div>,
		tempAlertActive,
		setActive,
	];
}
