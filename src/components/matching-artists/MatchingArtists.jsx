import './matching-artists.css';

import PropTypes from 'prop-types';
import React from 'react';

import sunBurst from '../../images/sun-burst.png';

function MatchingArtists({ animationData }) {
	const oneMatchingArtist =
		animationData.match_profile.matching_artists.length === 1;

	return (
		<div className='screen3-content fade-in'>
			<h1 className='screen3-title fade-in'>Matching Artists Are</h1>
			<div className={`artist-grid ${oneMatchingArtist ? 'one-match' : ''}`}>
				<div className='top-artist'>
					<div className='top-artists-wrapper'>
						<div className='top-artist-img-wrapper'>
							<img
								className='top-artist-img'
								src={animationData.match_profile.matching_artists[0].artist_img}
								alt=''
							/>
						</div>

						<div className='sun-burst-wrapper'>
							<img src={sunBurst} className='top-artist-burst' alt='' />
						</div>
					</div>
				</div>
				{!oneMatchingArtist && (
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
				)}
				<div className={`names ${oneMatchingArtist ? 'one-match-names' : ''}`}>
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

MatchingArtists.propTypes = {
	animationData: PropTypes.object,
};

export default MatchingArtists;
