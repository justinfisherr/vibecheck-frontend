import React from 'react';
import threeStar from '../../images/three-star.png';
import './match-percent.css';

export default function MatchPercent({ animationData }) {
	const matchPercent = animationData.match_profile.match_percent;
	return (
		<div className='match-percent-wrapper'>
			<img className='three-star three-star-left' src={threeStar} alt='' />
			<img className='three-star three-star-right' src={threeStar} alt='' />
			<p className='match-percent match-percent-1'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
			<p className='match-percent match-percent-2'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
			<p className='match-percent match-percent-3'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
			<p className='match-percent match-percent-4'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
			<p className='match-percent match-percent-5'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
			<p className='match-percent'>
				<span
					className={`percent ${matchPercent === 100 ? 'one-hundred' : ''}`}>
					{matchPercent}
				</span>
				<span className='percent-symbol'>%</span>
			</p>
		</div>
	);
}
