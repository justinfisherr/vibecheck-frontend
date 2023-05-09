import './spinner.css';

import React from 'react';

export default function Spinner({ color }) {
	return (
		<div className='spinner-wrapper'>
			<div className='lds-ring'>
				<div
					style={{
						borderColor: `${color} transparent transparent transparent`,
					}}></div>
				<div
					style={{
						borderColor: `${color} transparent transparent transparent`,
					}}></div>
				<div
					style={{
						borderColor: `${color} transparent transparent transparent`,
					}}></div>
				<div
					style={{
						borderColor: `${color} transparent transparent transparent`,
					}}></div>
			</div>
		</div>
	);
}
