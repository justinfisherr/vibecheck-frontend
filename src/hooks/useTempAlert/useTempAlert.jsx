import React, { useState, useEffect } from 'react';
import './temp-alert.css';
import check from '../../images/check.svg';

export default function useTempAlert(tempAlert) {
	const [tempAlertActive, setActive] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setActive(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, [tempAlertActive]);

	return [
		<div className='temp-wrapper'>
			<div className='check-wrapper'>
				<img src={check} alt='' />
			</div>
			<p className='temp-alert'>{tempAlert}</p>
		</div>,
		tempAlertActive,
		setActive,
	];
}
