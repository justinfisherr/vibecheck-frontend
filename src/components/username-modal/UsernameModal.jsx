import React, { useRef, useState } from 'react';
import './username-modal.css';
import useSubmitVibeId from '../../hooks/useSubmitVibeId/useSubmitVibeId';
import editIcon from '../../images/edit-icon.svg';
import errorIcon from '../../images/circle-exclamation-solid.svg';
import Spinner from '../spinner/Spinner';

export default function UsernameModal({
	openModal,
	setOpenModal,
	vibeId,
	setUserData,
	setVibeId,
}) {
	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState();
	const [currentInputValue, setCurrentInputValue] = useState(vibeId);
	const changeUserNameInput = useRef();
	const submitVibeId = useSubmitVibeId(
		setUserData,
		setErrors,
		setLoading,
		setVibeId
	);

	function handleCloseModal({ target }) {
		if (target.id === 'allow-close') {
			setOpenModal(false);
			setCurrentInputValue(vibeId);
			setErrors(null);
		}
	}

	function handleSaveNewUsername(newVibeId) {
		setLoading(true);
		submitVibeId({
			oldId: vibeId,
			newId: newVibeId,
		});
	}

	function handleKeyDown() {}
	function handleInputChange(value) {
		setCurrentInputValue(value);
	}

	return (
		<div
			className={`username-modal-container ${
				openModal ? '' : 'hide-username-modal'
			}`}
			id='allow-close'
			onMouseDown={(e) => handleCloseModal(e)}>
			<div className='change-username-input-container'>
				<div className='change-username-title-wrapper'>
					<div className='edit-icon-wrapper'>
						<img src={editIcon} alt='' />
					</div>
					<h3 className='change-username-title'>Edit your Vibe ID</h3>
				</div>

				<div className='change-username-input-wrapper'>
					<p className='at-symbol'>ID</p>
					<input
						type='text'
						className='change-username-input'
						value={currentInputValue}
						ref={changeUserNameInput}
						onChange={(e) => handleInputChange(e.target.value)}
						onKeyDown={(e) => handleKeyDown(e)}
						spellCheck='false'
					/>
				</div>

				<div className='change-username-modal-subtext-wrapper'>
					{errors && (
						<p className='error-message'>
							<span className='error-icon-wrapper'>
								<img src={errorIcon} alt='' />
							</span>{' '}
							{errors}
						</p>
					)}

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
