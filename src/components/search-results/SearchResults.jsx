import React, { useEffect, useState } from 'react';
import defaultImg from '../../images/default-user-image.svg';
import useWindowSize from '../../hooks/window-size/useWindowSize';
import './search-results.css';

export default function SearchResults({ results, userId, input, handleSend }) {
	const windowSize = useWindowSize();
	const [bottomOfScreen, setBottomOfScreen] = useState(0);

	useEffect(() => {
		const resultsWrapper = document.querySelector('.search-results-wrapper');
		const resultsWrapperTop = resultsWrapper.getBoundingClientRect().top;

		const backgroundWrapper = document.querySelector('.background-wrapper');
		const backgroundWrapperBottom = backgroundWrapper.getBoundingClientRect()
			.bottom;

		const bottomOfScreen = backgroundWrapperBottom - resultsWrapperTop - 20;
		setBottomOfScreen(bottomOfScreen);
	}, [windowSize]);

	return (
		<div
			className='search-results-wrapper'
			style={{ maxHeight: bottomOfScreen || 0 }}>
			{results.success &&
				results.data.map(({ user_info }) => {
					if (user_info.vibe_id === userId) {
						return null;
					}
					return (
						<div
							className='result'
							onClick={() => handleSend(user_info.vibe_id)}
							key={user_info.user_id}>
							<div className='result-img-wrapper'>
								<img
									src={
										user_info.profile_img ? user_info.profile_img : defaultImg
									}
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
			{!results.loading &&
				results.success &&
				results.data.length === 0 &&
				input && <p className='no-result'>NO RESULT</p>}
			{!results.loading &&
				results.success &&
				results.data.length === 1 &&
				results.data[0].user_info.user_id === userId && (
					<p className='no-result'>NO RESULT</p>
				)}
		</div>
	);
}
