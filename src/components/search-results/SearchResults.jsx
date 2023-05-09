import './search-results.css';

import React, { useEffect, useState } from 'react';

import useWindowSize from '../../hooks/window-size/useWindowSize';
import defaultImg from '../../images/default-user-image.svg';

export default function SearchResults({
	results,
	vibeId,
	userInput,
	handleSend,
	searchLoading,
}) {
	const windowSize = useWindowSize();
	const [bottomOfScreen, setBottomOfScreen] = useState(0);

	useEffect(() => {
		const resultsWrapper = document.querySelector('.search-results-wrapper');
		const resultsWrapperTop = resultsWrapper.getBoundingClientRect().top;

		const backgroundWrapper = document.querySelector('.background-wrapper');
		const backgroundWrapperBottom =
			backgroundWrapper.getBoundingClientRect().bottom;

		const bottomOfScreen = backgroundWrapperBottom - resultsWrapperTop - 20;
		setBottomOfScreen(bottomOfScreen);
	}, [windowSize]);

	return (
		<div
			className='search-results-wrapper'
			style={{ maxHeight: bottomOfScreen || 0 }}>
			{results &&
				results.map(({ user_info }) => {
					if (user_info.vibe_id === vibeId) {
						return null;
					}
					return (
						<div
							className='result focus-outline'
							tabIndex='0'
							onClick={() => handleSend(user_info.vibe_id)}
							key={user_info.user_id}>
							<div className='result-img-wrapper'>
								<div className='default-result-img-wrapper'>
									<img src={defaultImg} className='result-img' alt='' />
								</div>

								<img
									src={user_info.profile_img}
									className='result-img'
									alt=''
								/>
							</div>
							<div className='result-info-wrapper'>
								<p className='result-displayname'>{user_info.username}</p>
								<p className='result-id'>{user_info.vibe_id}</p>
							</div>
						</div>
					);
				})}
			{searchLoading && <p className='no-result'>Loading...</p>}
			{!searchLoading && results.length === 0 && userInput && (
				<p className='no-result'>NO RESULT</p>
			)}
		</div>
	);
}
