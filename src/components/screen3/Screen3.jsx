import React from 'react';
import './screen3.css';
import sunBurst from '../../images/sun-burst.png';

function Screen3({ animationData }) {
	return (
		<div className='screen3-content fade-in'>
			<h1 className='screen3-title fade-in'>Matching Artists Are</h1>
			<div className='artist-grid'>
				<div className='top-artist'>
					<div className='top-artists-wrapper'>
						<div className='top-artist-img-wrapper'>
							<img
								className='top-artist-img'
								src={animationData.match_profile.matching_artists[0].artist_img}
								alt=''
							/>
						</div>

						{/* <div className='sun-burst-wrapper'>
							<img src={sunBurst} className='top-artist-burst' alt='' />
						</div> */}
					</div>
				</div>

				<div className='remaining-artist'>
					{animationData.match_profile.matching_artists
						.slice(1, 5)
						.map(({ artist_img }, index) => (
							<div className='artist' key={index}>
								<img
									className={`remaining-artist-img artist-img-${index + 2}`}
									src={artist_img}
									alt=''
								/>
							</div>
						))}
				</div>
				<div className='names'>
					{animationData.match_profile.matching_artists.map(
						({ artist_name }, index) => (
							<div
								key={index}
								className={`artist-name-wrapper artist-name-wrapper-${index}`}>
								<p className='artist-number'>{index + 1}</p>
								<p className='artist-name'>{artist_name}</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default Screen3;
