import './profile-dropdown.css';

import React from 'react';

import defaultImg from '../../images/default-user-image.svg';
import logoutIcon from '../../images/right-from-bracket-solid.svg';
import trashIcon from '../../images/trash-can-solid.svg';

function ProfileDropdown({
	profileImg,
	setShowDeleteModal,
	showDropdown,
	setShowDropdown,
}) {
	function handleAvatarClick() {
		setShowDropdown(!showDropdown);
	}

	function handleCloseDropdown({ target }) {
		if (target.id === 'allow-close') {
			setShowDropdown(false);
		}
	}

	function handleLogoutClick() {
		localStorage.removeItem('userData');
		window.location.replace(window.location.origin);
	}

	function handleDeleteAccountClick() {
		setShowDeleteModal(true);
	}

	return (
		<div
			className='profile-dropdown-container'
			id='allow-close'
			onClick={(e) => handleCloseDropdown(e)}>
			<div
				className='profile-dropdown-image-wrapper'
				id='avatar'
				onClick={handleAvatarClick}>
				<img
					className='user-avatar'
					src={profileImg ? profileImg : defaultImg}
					alt='User Avatar'
				/>
			</div>

			{showDropdown && (
				<div className='profile-dropdown'>
					<ul className='dropdown-buttons-wrapper'>
						<li className='dropdown-button' onClick={handleLogoutClick}>
							<div className='dropdown-button-icon'>
								<img src={logoutIcon} alt='logout' />
							</div>
							Logout
						</li>
						<li className='dropdown-button' onClick={handleDeleteAccountClick}>
							<div className='dropdown-button-icon trash-icon'>
								<img src={trashIcon} alt='trash can' />
							</div>
							Delete Account
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default ProfileDropdown;
