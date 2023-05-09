import './not-enough-data-modal.css';

import React, { useState } from 'react';

import errorIcon from '../../images/triangle-exclamation-solid.svg';

function NotEnoughDataModal() {
	const queryParameters = new URLSearchParams(window.location.search);
	const notEnoughData = queryParameters.get('not_enough_data');
	const [displayModal, setDisplayModal] = useState(notEnoughData === 'true');
	window.history.replaceState(null, 'Vibe Check', window.location.pathname);

	function handleCloseModal({ target }) {
		if (target.id === 'allow-close') {
			setDisplayModal(false);
		}
	}

	return (
		displayModal && (
			<div
				className='not-enough-data-modal-container'
				id='allow-close'
				onMouseDown={(e) => handleCloseModal(e)}>
				<div className='not-enough-data-modal'>
					<div className='error-icon-wrapper'>
						<img src={errorIcon} alt='' className='error-icon' />
					</div>
					<p className='not-enough-data-heading'>Not Enough Data!</p>
					<p className='not-enough-data-subtext'>
						Sorry, It looks like your account does not have enough data to make
						a comparison.
					</p>
					<button
						className='button not-enough-data-button'
						id='allow-close'
						onClick={(e) => handleCloseModal(e)}>
						Okay
					</button>
				</div>
			</div>
		)
	);
}

export default NotEnoughDataModal;
