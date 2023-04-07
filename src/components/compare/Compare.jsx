import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Background from '../background/Background';
import UsernameInput from '../username-input/UsernameInput';
import CompareImages from '../compare-images/CompareImages';
import { Helmet } from 'react-helmet-async';
import './compare.css';

function Compare() {
	// Get url params
	const urlObj = new URLSearchParams(window.location.search);
	const vibeId = urlObj.get('vibe_id');
	const profileImg = urlObj.get('profile_img');

	const [responseData, setResponseData] = useState(null);

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
					<p className='compare-your-id'>Your ID: {vibeId}</p>

					<CompareImages profileImg={profileImg} />
					<p className='compare-subheading'>
						Enter the other users Vibe Check ID
					</p>
					<UsernameInput setResponseData={setResponseData} vibeId={vibeId} />
				</div>
			</Background>
		</div>
	) : (
		<Navigate
			to={`/animation?${urlObj.toString()}`}
			responseData={responseData}
		/>
	);
}

export default Compare;
