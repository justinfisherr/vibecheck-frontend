import React from 'react';
import './spinner.css';

export default function Spinner() {
	return (
		<div className='spinner-wrapper'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}
