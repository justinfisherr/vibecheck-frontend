import React, { useRef, useState } from 'react';
import './username-modal.css';
import useSubmitVibeId from '../../hooks/useSubmitVibeId/useSubmitVibeId';
import editIcon from '../../images/edit-icon.svg';
import useTempAlert from '../../hooks/useTempAlert/useTempAlert';
import Spinner from '../spinner/Spinner';
import copy from '../../images/copy.svg';

export default function UsernameModal({
	openModal,
	setOpenModal,
	vibeId,
	setUserData,
	setVibeId,
}) {
	const [loading, setLoading] = useState(false);
	const [currentInputValue, setCurrentInputValue] = useState(vibeId);
	const changeUserNameInput = useRef();
	const [tempAlert, tempAlertActive, setActive] = useTempAlert();
	const [error, setError] = useState(false);
	const submitVibeId = useSubmitVibeId(
		setUserData,
		setLoading,
		setVibeId,
		setActive,
		setError
	);

	function handleCloseModal({ target }) {
		if (target.id === 'allow-close') {
			setOpenModal(false);
			setCurrentInputValue(vibeId);
		}
	}

	function handleSaveNewUsername(newVibeId) {
		if (!tempAlertActive) {
			setLoading(true);
			submitVibeId({
				oldId: vibeId,
				newId: newVibeId,
			});
		}
	}

	function handleKeyDown() {}
	function handleInputChange(value) {
		setCurrentInputValue(value);
	}

	function handleCopyClick() {
		if (!tempAlertActive) {
			navigator.clipboard.writeText(vibeId);
			setActive('Copied!');
		}
	}

	return (
		<div
			className={`username-modal-container ${
				openModal ? '' : 'hide-username-modal'
			}`}
			id='allow-close'
			onMouseDown={(e) => handleCloseModal(e)}>
			<div
				className={`change-username-input-container ${
					error ? 'error-animation' : ''
				}`}>
				<div className='change-username-title-wrapper'>
					<div className='edit-icon-wrapper'>
						<img src={editIcon} alt='' />
					</div>
					<h3 className='change-username-title'>Edit your ID</h3>
				</div>

				<div className='change-username-input-wrapper'>
					<input
						type='text'
						className='change-username-input'
						value={currentInputValue}
						ref={changeUserNameInput}
						onChange={(e) => handleInputChange(e.target.value)}
						onKeyDown={(e) => handleKeyDown(e)}
						spellCheck='false'
					/>
					<div
						className='copy-vibe-id-icon-wrapper'
						onClick={() => handleCopyClick()}>
						<img className='copy-icon' src={copy} alt='' />
					</div>
				</div>

				<div className='change-username-modal-subtext-wrapper'>
					<div className='temp-alert-wrapper'>
						{tempAlertActive && tempAlert}
					</div>

					<div className='change-username-modal-button-wrapper'>
						<button
							className='save-username-button cancel-button'
							type='submit'
							id='allow-close'
							onClick={(e) => handleCloseModal(e)}>
							Cancel
						</button>
						<button
							className='save-username-button'
							type='submit'
							onClick={() => handleSaveNewUsername(currentInputValue)}>
							{loading ? <Spinner /> : 'Save'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
