import React from 'react';
import './screen4.css';

function Screen4({ animationData }) {
	return (
		<div className='screen4-content'>
			<h1 className='screen4-title fade-in'>MATCHING SONGS ARE</h1>
			<div className='artist-covers'>
				{animationData.match_profile.matching_songs.map(
					({ song_img }, index) => {
						return (
							<div
								className={`overlap-img-wrapper overlap-img-wrapper-${
									index + 1
								}`}>
								<img className='song-img' src={song_img} alt=''></img>
							</div>
						);
					}
				)}
			</div>

			<div className='song-data song-fade-in'>
				{animationData.match_profile.matching_songs.map(
					({ song_name, artist_name }, index) => (
						<div className='single-song-data-wrapper'>
							<p className='song-index'>#{index + 1}</p>
							<div className='single-song-text'>
								<p className='single-song-name'>{song_name}</p>
								<p className='single-artist-name'>{artist_name}</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}

export default Screen4;
