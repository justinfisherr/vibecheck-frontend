import './recommendation-text.css';

import PropTypes from 'prop-types';
import React from 'react';

function RecommendationText({ wordsToDisplay, wordsType }) {
	return (
		<div className='recommened-page-content'>
			<p className='recommend-page-text'>
				{wordsToDisplay.map((currentWord, index) => (
					<span
						key={index}
						className={`word fade-in ${
							currentWord === wordsType
								? wordsType === 'Artists'
									? 'artists-color'
									: 'song-color'
								: ''
						}`}
						style={{ animationDelay: `${0.15 * index}s` }}>
						{' '}
						{currentWord}
					</span>
				))}
			</p>
		</div>
	);
}

RecommendationText.propTypes = {
	wordsToDisplay: PropTypes.arrayOf(PropTypes.string),
	wordsType: PropTypes.string,
};

export default RecommendationText;
