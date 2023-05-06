import React, { useEffect, useState } from 'react';
import './background.css';

import StipleImage from '../stiple-image/StipleImage';
import Waves from '../waves/Waves';

import useWindowSize from '../../hooks/window-size/useWindowSize';

import spotifyLogo from '../../images/spotify-logo.svg';
import spotifyLogoWithText from '../../images/spotify-logo-with-text.svg';
import stipleBottomLeft from '../../images/Stiple1.png';
import stipleTopLeft from '../../images/Stiple2.png';
import stipleTopRight from '../../images/Stiple3.png';
import stipleBottomRight from '../../images/Stiple4.png';
import star from '../../images/star.png';
import wavesTop from '../../images/waves-top.svg';
import wavesBottom from '../../images/waves-bottom.svg';
import spinBurst from '../../images/spin-burst.png';
import vibecheckLogo from '../../images/logo.svg';
import vibecheckLogoNoText from '../../images/logo-no-text.svg';

export default function Background({ children, currentScreen }) {
	const windowSize = useWindowSize();
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		const userData = localStorage.getItem('userData');
		setUserData(JSON.parse(userData));
	}, [windowSize]);

	function handleLogoClick() {
		window.location.replace(window.location.origin);
	}

	return (
		<div className='background-container'>
			<div onClick={() => handleLogoClick()} className='logo-container'>
				<img
					className='vibecheck-logo'
					src={windowSize.width < 480 ? vibecheckLogoNoText : vibecheckLogo}
					alt='vibecheck logo'
				/>
			</div>
			<a
				href='https://open.spotify.com/'
				target='_blank'
				rel='noopener noreferrer'>
				<img
					className='spotify-logo'
					src={windowSize.width < 480 ? spotifyLogo : spotifyLogoWithText}
					alt='spotify logo'
				/>
			</a>
			<div className='background-wrapper'>
				{currentScreen === 'percent' && (
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
						styles={`waves-top waves-top-${currentScreen} ${
							currentScreen === 'percent' ? 'fade-away' : ''
						}`}
						src={wavesTop}
					/>
				</div>
				<div className='absolute wave-bottom-container'>
					<Waves
						styles={`waves-bottom waves-bottom-${currentScreen} ${
							currentScreen === 'percent' ? 'fade-away' : ''
						}`}
						src={wavesBottom}
					/>
				</div>
				<div className='absolute stiple-img-container-1'>
					<StipleImage currentScreen={currentScreen} src={stipleBottomLeft} />
				</div>
				<div className='absolute stiple-img-container-2'>
					<StipleImage currentScreen={currentScreen} src={stipleTopLeft} />
				</div>
				<div className='absolute stiple-img-container-3'>
					<StipleImage currentScreen={currentScreen} src={stipleTopRight} />
				</div>
				<div className='absolute stiple-img-container-4'>
					<StipleImage currentScreen={currentScreen} src={stipleBottomRight} />
				</div>
				<div className='absolute star star1'>
					<img className='stiple-img' src={star} alt='' />
				</div>
				<div className='absolute star star2'>
					<img className='stiple-img' src={star} alt='' />
				</div>
			</div>

			{children}
		</div>
	);
}
