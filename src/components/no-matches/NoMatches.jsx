import React from 'react';
import './no-matches.css';

export default function NoMatches({ animationData, type }) {
	const words = [
		'it',
		'looks',
		'like',
		'you',
		'and',
		animationData.users.user2.username,
		'have',
		'no',
		'matching',
		type,
		'.',
		'.',
		'.',
		'☹',
	];
	return (
		<div className='recommened-page-content'>
			<p className='recommend-page-text'>
				{words.map((word, index) => {
					return (
						<span
							key={index}
							className={`no-match-word fade-in ${
								word === 'no' ? 'color-word-no' : ''
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
