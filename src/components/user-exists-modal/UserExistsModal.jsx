import React from 'react';
import errorIcon from '../../images/triangle-exclamation-solid.svg';
import './user-exists-modal.css';

function UserExistsModal({ displayExistsModal, setExistsDisplayModal }) {
	function handleCloseModal({ target }) {
		if (target.id === 'allow-close') {
			setExistsDisplayModal(false);
		}
	}

	return (
		displayExistsModal && (
			<div
				className='user-exists-modal-container'
				id='allow-close'
				onMouseDown={(e) => handleCloseModal(e)}>
				<div className='user-exists-modal'>
					<div className='error-icon-wrapper'>
						<img src={errorIcon} alt='' className='error-icon' />
					</div>
					<p className='user-exists-modal-heading'>User Does Not Exist!</p>
					<p className='user-exists-modal-subtext'>
						Sorry, the user you entered either does not exist, changed their ID,
						or deleted their account.
					</p>
					<button
						className='button user-exists-modal-button'
						id='allow-close'
						onClick={(e) => handleCloseModal(e)}>
						Okay
					</button>
				</div>
			</div>
		)
	);
}

export default UserExistsModal;
