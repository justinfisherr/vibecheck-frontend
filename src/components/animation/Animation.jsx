import './animation.css';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

import useScreens from '../../hooks/useScreens/useScreens';
import leftCarret from '../../images/caret-left-solid.svg';
import rightCarret from '../../images/caret-right-solid.svg';
import redoIcon from '../../images/rotate-right-solid.png';
import Background from '../background/Background';
import SocialButtons from '../social-buttons/SocialButtons';

function Animation() {
	// Index used to keep track of the current animation screen
	const [screenIndex, setScreenIndex] = useState(0);

	// Used to send the user back to the compare screen
	const [sendBackToCompare, setSendBackToCompare] = useState(false);

	// Hook that generates the screens and the styles to display to the user based on the comparison data
	const [screens, styles] = useScreens();

	// Removes url parameters
	window.history.replaceState(null, 'Vibe Check', '/animation');

	const lastScreenIndex = screens.length - 1;

	// Decrements the screenIndex variable to display the previous screen
	function prevScreen() {
		setScreenIndex((currentScreen) => {
			if (currentScreen === 0) {
				setSendBackToCompare(true);
			}
			return currentScreen - 1;
		});
	}

	// Increments the screenIndex variable to display the next screen
	function nextScreen() {
		setScreenIndex((currentScreen) => {
			if (currentScreen === screens.length - 1) {
				return currentScreen;
			}
			return currentScreen + 1;
		});
	}

	// Sends the user back to the compare screen
	function handleRedo() {
		setSendBackToCompare(true);
	}

	// If sendBackToCompare is set to true then the user will get navigated to the compare screen
	return sendBackToCompare ? (
		<Navigate to={'/compare'} />
	) : (
		<div className={`animation-page animation-page-${styles[screenIndex]}`}>
			<Helmet>
				<title>Vibe Check</title>
				<meta
					name='description'
					content='Check your music compatibility. Connect your Spotify account and see how well your music taste matches up.'
				/>
				<link rel='canonical' href='https://thevibecheck.io/animation' />
				<meta name='robots' content='noindex' />
			</Helmet>
			<Background currentScreenName={styles[screenIndex]}>
				<button
					aria-label='Back'
					type='button'
					tabIndex='0'
					className='button back-button'
					onClick={handleRedo}>
					Back
				</button>
				<div className='animation-content-wrapper'>
					<div className='screens'>{screens[screenIndex]}</div>
					<div
						className={`buttons ${
							screenIndex === lastScreenIndex ? 'buttons-three' : ''
						}`}>
						<button
							aria-label='Previous screen'
							type='button'
							tabIndex='0'
							className='animation-button'
							onClick={prevScreen}>
							<img className='carret' src={leftCarret} alt='' />
						</button>
						{screenIndex === lastScreenIndex ? (
							<>
								<SocialButtons />
								<button
									aria-label='Compare again'
									type='button'
									tabIndex='0'
									className='redo-button'
									onClick={handleRedo}>
									<img className='redo-icon' src={redoIcon} alt='' />
								</button>
							</>
						) : (
							<button
								aria-label='Next screen'
								type='button'
								tabIndex='0'
								className='animation-button'
								onClick={nextScreen}>
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
