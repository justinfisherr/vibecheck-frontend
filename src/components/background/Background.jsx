import './background.css';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import useWindowSize from '../../hooks/window-size/useWindowSize';
import vibecheckLogo from '../../images/logo.svg';
import vibecheckLogoNoText from '../../images/logo-no-text.svg';
import spinBurst from '../../images/spin-burst.png';
import spotifyLogo from '../../images/spotify-logo.svg';
import spotifyLogoWithText from '../../images/spotify-logo-with-text.svg';
import star from '../../images/star.png';
import stipleBottomLeft from '../../images/Stiple1.png';
import stipleTopLeft from '../../images/Stiple2.png';
import stipleTopRight from '../../images/Stiple3.png';
import stipleBottomRight from '../../images/Stiple4.png';
import wavesBottom from '../../images/waves-bottom.svg';
import wavesTop from '../../images/waves-top.svg';
import StipleImage from '../stiple-image/StipleImage';
import Waves from '../waves/Waves';

function Background({ children, currentScreenName }) {
	// Hook that detects when the screen size changes
	const windowSize = useWindowSize();

	// Force a rerender when the screen size changes
	useEffect(() => {}, [windowSize]);

	// Redirect the user to the homepage if they click the logo
	function handleLogoClick() {
		window.location.replace(window.location.origin);
	}

	// If the user hits a key when the logo is in focus this checks to see if
	// the key pressed was the enter, if it was redirect them to the homepage
	function handleKeyDown(e) {
		if (e.code === 'Enter' || event.code === 'NumpadEnter') {
			handleLogoClick();
		}
	}

	return (
		<div className='background-container'>
			<div
				onClick={handleLogoClick}
				onKeyDown={(e) => handleKeyDown(e)}
				id='logo'
				className='logo-container focus-outline'
				role='button'
				tabIndex='0'>
				<img
					className='vibecheck-logo'
					src={windowSize.width < 480 ? vibecheckLogoNoText : vibecheckLogo}
					alt='vibecheck logo'
				/>
			</div>
			<a
				className='focus-outline spotify-logo'
				href='https://open.spotify.com/'
				target='_blank'
				rel='noopener noreferrer'
				role='button'
				tabIndex='0'>
				<img
					src={windowSize.width < 480 ? spotifyLogo : spotifyLogoWithText}
					alt='spotify logo'
				/>
			</a>
			<div className='background-wrapper'>
				{currentScreenName === 'percent' && (
					<div className='absolute spin-bursts-wrapper'>
						<img
							className='absolute spin-burst spin-burst-1'
							src={spinBurst}
							alt=''
						/>
						<img
							className='absolute spin-burst spin-burst-2'
							src={spinBurst}
							alt=''
						/>
						<img
							className='absolute spin-burst spin-burst-3'
							src={spinBurst}
							alt=''
						/>
					</div>
				)}

				<div className='absolute wave-top-container'>
					<Waves
						styles={`waves-top waves-top-${currentScreenName} ${
							currentScreenName === 'percent' ? 'fade-away' : ''
						}`}
						src={wavesTop}
					/>
				</div>
				<div className='absolute wave-bottom-container'>
					<Waves
						styles={`waves-bottom waves-bottom-${currentScreenName} ${
							currentScreenName === 'percent' ? 'fade-away' : ''
						}`}
						src={wavesBottom}
					/>
				</div>
				<div className='absolute stiple-img-container-1'>
					<StipleImage
						currentScreenName={currentScreenName}
						src={stipleBottomLeft}
					/>
				</div>
				<div className='absolute stiple-img-container-2'>
					<StipleImage
						currentScreenName={currentScreenName}
						src={stipleTopLeft}
					/>
				</div>
				<div className='absolute stiple-img-container-3'>
					<StipleImage
						currentScreenName={currentScreenName}
						src={stipleTopRight}
					/>
				</div>
				<div className='absolute stiple-img-container-4'>
					<StipleImage
						currentScreenName={currentScreenName}
						src={stipleBottomRight}
					/>
				</div>
				<div className='absolute noselect star star1'>
					<img className='stiple-img' src={star} alt='star' />
				</div>
				<div className='absolute noselect star star2'>
					<img className='stiple-img' src={star} alt='star' />
				</div>
			</div>

			{children}
		</div>
	);
}

Background.propTypes = {
	children: PropTypes.node.isRequired,
	currentScreenName: PropTypes.string,
};

export default Background;
