import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Background from '../background/Background';
import UsernameInput from '../username-input/UsernameInput';
import CompareImages from '../compare-images/CompareImages';
import { Helmet } from 'react-helmet-async';
import './compare.css';

function Compare() {
	// Get url params
	const [responseData, setResponseData] = useState(null);
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem('userData'))
	);

	const queryParameters = new URLSearchParams(window.location.search);
	const urlUserImg = queryParameters.get('profile_img');
	const urlVibeId = queryParameters.get('vibe_id');
	window.history.replaceState(null, 'Vibe Check', window.location.pathname);

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
				<div className='content compare-content'>
					<h1 className='compare-heading'>COMPARE WITH?</h1>
					<p className='compare-your-id'>
						Your ID: {userData ? userData.vibeId : urlVibeId}
					</p>

					<CompareImages
						profileImg={userData ? userData.userImg : urlUserImg}
					/>
					<p className='compare-subheading'>
						Enter the other users Vibe Check ID
					</p>
					<UsernameInput
						setResponseData={setResponseData}
						vibeId={userData ? userData.vibeId : urlVibeId}
					/>
				</div>
			</Background>
		</div>
	) : (
		<Navigate to={`/animation`} responseData={responseData} />
	);
}

export default Compare;
