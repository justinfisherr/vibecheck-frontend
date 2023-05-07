import React, { useState } from 'react';
import useScreens from '../../hooks/useScreens/useScreens';
import { Helmet } from 'react-helmet-async';
import redoIcon from '../../images/rotate-right-solid.png';
import { Navigate } from 'react-router-dom';
import './animation.css';

import Background from '../background/Background';
import SocialButtons from '../social-buttons/SocialButtons';

import rightCarret from '../../images/caret-right-solid.svg';
import leftCarret from '../../images/caret-left-solid.svg';

function Animation() {
	const [index, setIndex] = useState(0);
	const [screens, styles] = useScreens();
	const [back, setBack] = useState(false);
	window.history.replaceState(null, 'Vibe Check', '/animation');

	function prevScreen() {
		setIndex((currentScreen) => {
			if (currentScreen === 0) {
				setBack(true);
			}
			return currentScreen - 1;
		});
	}

	function nextScreen() {
		setIndex((currentScreen) => {
			if (currentScreen === screens.length - 1) {
				return currentScreen;
			}
			return currentScreen + 1;
		});
	}

	function handleRedo() {
		setBack(true);
	}

	return back ? (
		<Navigate to={`/compare`} />
	) : (
		<div className={`animation-page animation-page-${styles[index]}`}>
			<Helmet>
				<title>Vibe Check</title>
				<meta
					name='description'
					content='Check your music compatibility. Connect your Spotify account and see how well your music taste matches up.'
				/>
				<link rel='canonical' href='https://thevibecheck.io/animation' />
				<meta name='robots' content='noindex' />
			</Helmet>
			<Background currentScreen={styles[index]}>
				<button className='button back-button' onClick={handleRedo}>
					Back
				</button>
				<div className='animation-content-wrapper'>
					<div className='screens'>{screens[index]}</div>
					<div
						className={`buttons ${
							index === screens.length - 1 ? 'buttons-three' : ''
						}`}>
						<button className='animation-button' onClick={() => prevScreen()}>
							<img className='carret' src={leftCarret} alt='' />
						</button>
						{index === screens.length - 1 ? (
							<>
								<SocialButtons />
								<button className='redo-button' onClick={() => handleRedo()}>
									<img className='redo-icon' src={redoIcon} alt='' />
								</button>
							</>
						) : (
							<button className='animation-button' onClick={() => nextScreen()}>
								<img className='carret' src={rightCarret} alt='' />
							</button>
						)}
					</div>
				</div>
			</Background>
		</div>
	);
}

export default Animation;
