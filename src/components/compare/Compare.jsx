import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Background from '../background/Background';
import UsernameInput from '../username-input/UsernameInput';
import editIcon from '../../images/edit-icon.svg';
import CompareImages from '../compare-images/CompareImages';
import UsernameModal from '../username-modal/UsernameModal';
import useSubmit from '../../hooks/useSubmit/useSubmit';
import Invite from '../invite/Invite';
import { Helmet } from 'react-helmet-async';
import './compare.css';

function Compare() {
	const [openModal, setOpenModal] = useState(false);
	const [responseData, setResponseData] = useState(null);
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem('userData'))
	);
	const queryParameters = new URLSearchParams(window.location.search);
	const urlUserImg = queryParameters.get('profile_img');
	const urlVibeId = queryParameters.get('vibe_id');

	const [vibeId, setVibeId] = useState(userData ? userData.vibeId : urlVibeId);
	const [userImg] = useState(userData ? userData.userImg : urlUserImg);

	const sumbitCompare = useSubmit(vibeId, setResponseData);

	useEffect(() => {
		const invite = JSON.parse(localStorage.getItem('invite'));
		if (invite) {
			localStorage.removeItem('invite');
			sumbitCompare(invite.otherVibeId);
		} else {
			window.history.replaceState(null, 'Vibe Check', window.location.pathname);
		}
	}, []);

	function handleChangeUsername() {
		setOpenModal(true);
	}

	return responseData == null ? (
		<div className='compare-page'>
			<Helmet>
				<title>Vibe Check</title>
				<meta
					name='description'
					content='Check your music compatibility. Connect your Spotify account and see how well your music taste matches up.'
				/>
				<link rel='canonical' href='https://thevibecheck.io/compare' />
				<meta name='robots' content='noindex' />
			</Helmet>
			<Background>
				<UsernameModal
					openModal={openModal}
					setOpenModal={setOpenModal}
					vibeId={vibeId}
					setUserData={setUserData}
					setVibeId={setVibeId}
				/>
				<div className='content compare-content'>
					<h1 className='compare-heading'>COMPARE WITH?</h1>
					<div className='id-container'>
						<p className='compare-your-id'>Your ID: {vibeId}</p>
						<div className='edit-button' onClick={() => handleChangeUsername()}>
							<img src={editIcon} alt='' />
						</div>
					</div>

					<CompareImages profileImg={userImg} />
					<p className='compare-subheading'>
						Enter the other users Vibe Check ID
					</p>
					<UsernameInput setResponseData={setResponseData} vibeId={vibeId} />
					<Invite vibeId={vibeId} />
				</div>
			</Background>
		</div>
	) : (
		<Navigate to={`/animation`} responseData={responseData} />
	);
}

export default Compare;
