import React, { useState, useRef, useEffect } from 'react';
import playIcon from '../../images/play-solid.svg';
import pauseIcon from '../../images/pause-solid.svg';
import './recommended-artists.css';

export default function RecommendedArtists({ recommended, type }) {
	const [songToPlay, setSongToPlay] = useState(null);
	const [songIsPlaying, setSongIsPlaying] = useState(false);
	const songPlayingIndex = useRef(-1);
	const playRef = useRef();

	useEffect(() => {
		if (songToPlay) {
			playRef.current.volume = 0.3;
			playRef.current.play();
		}
	}, [playRef, songToPlay]);

	function handlePlayClick(index) {
		const theSongClickedIsPlaying = index === songPlayingIndex.current;

		if (songIsPlaying && theSongClickedIsPlaying) {
			playRef.current.pause();
			setSongIsPlaying(false);
		} else {
			if (songToPlay) {
				playRef.current.play();
			}
			setSongToPlay(recommended[index].preview_url);
			setSongIsPlaying(true);
			songPlayingIndex.current = index;
		}
	}

	function handleSongEnd() {
		setSongToPlay(null);
		setSongIsPlaying(false);
		songPlayingIndex.current = -1;
	}

	return (
		<div className='recommended-content'>
			<h1
				className={`recommended-title fade-in ${
					type === 'Songs' ? 'recommended-songs-title' : ''
				}`}>
				Recommended {type === 'Artists' ? 'Artists' : 'Songs'}
			</h1>
			<div className='recommended-grid'>
				{recommended.map(
					({ artist_name, artist_img, song_img, song_name, url }, index) => (
						<div
							key={index}
							className={`recommended-item-wrapper recommended-item-wrapper-${index}`}>
							{type === 'Artists' ? (
								<>
									<p className='recommended-index'>#{index + 1}</p>
									<div
										className={`recommended-img-wrapper recommended-img-wrapper-${index}`}>
										<img
											className='recommended-img'
											src={type === 'Artists' ? artist_img : song_img}
											alt=''
										/>
									</div>
									<div className='recommended-data-wrapper'>
										<p className='recommended-data'>{artist_name}</p>
									</div>
								</>
							) : (
								<>
									<p className='recommended-index recommended-song-index'>
										<img
											onClick={() => handlePlayClick(index)}
											className='play-icon'
											src={
												songPlayingIndex.current === index && songIsPlaying
													? pauseIcon
													: playIcon
											}
											alt=''
										/>
									</p>
									<div
										className={`recommended-img-wrapper recommended-song-img-wrapper-${index}`}>
										<img
											className='recommended-img'
											src={type === 'Artists' ? artist_img : song_img}
											alt=''
										/>
									</div>
									<div className='recommended-song-text'>
										<a
											href={url}
											target='_blank'
											className='recommended-song-name'>
											{song_name}
										</a>
										<p className='recommended-artist-name'>{artist_name}</p>
									</div>
								</>
							)}
						</div>
					)
				)}
			</div>
			{type === 'Songs' && (
				<figure className='play-bar'>
					<audio
						controlsList='noplaybackrate nodownload'
						onEnded={() => handleSongEnd()}
						ref={playRef}
						controls
						src={songToPlay}></audio>
				</figure>
			)}
		</div>
	);
}
