import React from 'react';
import './but-here.css';

export default function ButHere({ words, type }) {
	return (
		<div className='recommened-page-content'>
			<p className='recommend-page-text'>
				{words.map((word, index) => {
					return (
						<span
							key={index}
							className={`word fade-in ${
								word === type
									? type === 'Artists'
										? 'artists-color'
										: 'song-color'
									: ''
							}`}
							style={{ animationDelay: `${0.15 * index}s` }}>
							{' '}
							{word}
						</span>
					);
				})}
			</p>
		</div>
	);
}
