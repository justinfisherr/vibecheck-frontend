import './delete-account-modal.css';

import axios from 'axios';
import React from 'react';

import errorIcon from '../../images/triangle-exclamation-solid.svg';

function DeleteAccountModal({ vibeId, showDeleteModal, setShowDeleteModal }) {
	function handleCloseModal({ target }) {
		if (target.id === 'allow-close') {
			setShowDeleteModal(false);
		}
	}

	function deleteAccount() {
		const defaultUrl =
			process.env.NODE_ENV === 'production'
				? 'https://vibecheck-backend-production.up.railway.app/deleteUser/'
				: 'http://localhost:5000/deleteUser/';

		axios
			.delete(defaultUrl, {
				headers: {
					'Content-Type': 'application/json',
				},
				data: {
					vibe_id: vibeId,
				},
			})
			.then(() => {
				setShowDeleteModal(false);
				localStorage.removeItem('userData');
				window.location.replace(window.location.origin);
			});
	}

	return (
		showDeleteModal && (
			<div
				className='delete-account-modal-container'
				id='allow-close'
				onMouseDown={(e) => handleCloseModal(e)}>
				<div className='delete-account-modal'>
					<div className='error-icon-wrapper'>
						<img src={errorIcon} alt='' className='error-icon' />
					</div>
					<p className='delete-account-heading'>Delete your account?</p>
					<p className='delete-account-subtext'>
						Are you sure you want to delete your account? All of your data will
						be permanently deleted.
					</p>
					<div className='delete-account-modal-buttons-wrapper'>
						<button
							className='cancel-button'
							id='allow-close'
							onClick={(e) => handleCloseModal(e)}>
							Cancel
						</button>
						<button className='button' onClick={deleteAccount}>
							Delete
						</button>
					</div>
				</div>
			</div>
		)
	);
}

export default DeleteAccountModal;
