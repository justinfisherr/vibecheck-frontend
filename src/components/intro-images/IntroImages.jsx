import React from 'react';
import defaultImg from '../../images/default-user-image-green.svg';
import threeStar from '../../images/three-star.svg';
import './intro-image.css';

export default function IntroImages({ animationData }) {
	return (
		<div className='img-container fade-in'>
			<div className='img-wrapper left-img'>
				<div className='circle circle-1'>
					<img
						src={
							animationData.users.user1.profile_img === ''
								? defaultImg
								: animationData.users.user1.profile_img
						}
						className='profile-img'
						alt=''
					/>
				</div>
				<div className='circle circle-2'></div>
				<div className='circle circle-3'></div>
				<div className='circle circle-4'></div>
				<div className='circle circle-5'></div>
				<div className='circle circle-6'></div>
				<div className='star-container'>
					<img src={threeStar} alt='' />
				</div>
			</div>
			<div className='img-wrapper right-img'>
				<div className='circle circle-1'>
					<img
						src={
							animationData.users.user2.profile_img === ''
								? defaultImg
								: animationData.users.user2.profile_img
						}
						className='profile-img'
						alt=''
					/>
				</div>
				<div className='circle circle-2'></div>
				<div className='circle circle-3'></div>
				<div className='circle circle-4'></div>
				<div className='circle circle-5'></div>
				<div className='circle circle-6'></div>
				<div className='star-container'>
					<img src={threeStar} alt='' />
				</div>
			</div>
		</div>
	);
}
