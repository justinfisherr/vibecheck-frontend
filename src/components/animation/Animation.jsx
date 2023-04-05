import React, { useState } from 'react';
import useScreens from '../../hooks/useScreens/useScreens';
// import useLocalStorage from '../../hooks/useLocalStorage/useLocalStorage';
import redoIcon from '../../images/rotate-right-solid.png';
import './animation.css';

import Background from '../background/Background';
import SocialButtons from '../social-buttons/SocialButtons';

import rightCarret from '../../images/caret-right-solid.svg';
import leftCarret from '../../images/caret-left-solid.svg';

function Animation() {
	const [index, setIndex] = useState(0);
	const [screens, styles] = useScreens();

	function prevScreen() {
		setIndex((currentScreen) => {
			if (currentScreen === 0) {
				const url =
					process.env.NODE_ENV === 'production'
						? 'https://pithy-stream-production.up.railway.app/login'
						: 'http://localhost:5000/login';
				window.location.replace(url);
				return currentScreen;
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
		const url =
			process.env.NODE_ENV === 'production'
				? 'https://vibecheck-backend-production.up.railway.app/login'
				: 'http://localhost:5000/login';
		window.location.replace(url);
	}

	return (
		<div className={`animation-page animation-page-${styles[index]}`}>
			<Background currentScreen={styles[index]}>
				<div className='animation-content-wrapper'>
					<div className='screens'>{screens[index]}</div>
					<div
						className={`buttons ${
							index === screens.length - 1 ? 'buttons-three' : ''
						}`}>
						<button
							className='animation-button back-button'
							onClick={() => prevScreen()}>
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
