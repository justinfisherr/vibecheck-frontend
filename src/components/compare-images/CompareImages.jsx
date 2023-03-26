import React from 'react';
import './compare-images.css';
import defaultImg from '../../images/default-user-image.svg';
import questionMark from '../../images/question-mark.svg';

export default function CompareImages({ profileImg }) {
	return (
		<div className='profile-img-wrapper'>
			<div className='compare-img-wrapper  compare-img-left-wrapper'>
				<img
					src={profileImg ? profileImg : defaultImg}
					className='compare-img compare-img-left'
					alt=''
				/>
			</div>
			<div className='compare-img-wrapper compare-img-right-wrapper'>
				<img
					src={questionMark}
					className='compare-img compare-img-right'
					alt=''
				/>
			</div>
		</div>
	);
}
