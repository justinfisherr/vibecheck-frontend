import React, { useContext } from 'react';
import { animationContext } from '../../context/animationContext';
import './share-screen.css';
import spinBurst from '../../images/spin-burst.png';
import stiple1 from '../../images/Stiple1-modal.png';
import stiple2 from '../../images/Stiple2-modal.png';
import stiple3 from '../../images/Stiple3-modal.png';
import stiple4 from '../../images/Stiple4-modal.png';

export default function ShareScreen({ myRef }) {
	const animationData = useContext(animationContext);
	return (
		<div className='modal-wrapper' ref={myRef}>
			<div className='modal-img-grid'>
				<div className='modal-title-text'>
					<h1 className='modal-title shifted-text'>thevibecheck.io</h1>
					<p className='modal-subtext'>Check your music compatability</p>
				</div>

				<div className='modal-user-images-percent'>
					<div className='modal-user-images-container'>
						<div className='user-wrapper user1-wrapper'>
							<div className='modal-username user1-username'>
								<p className='shifted-text'>
									{animationData.current.users.user1.username}
								</p>
							</div>
							<div className='outer-img-wrapper'>
								<div className='modal-user-img-wrapper user1-img-wrapper'>
									<img
										className='modal-user-img'
										src={animationData.current.users.user1.profile_img}
										alt=''
									/>
								</div>
							</div>
							<div className='modal-user-id user1-vibe-id'>
								<p className='shifted-text'>
									ID: {animationData.current.users.user1.vibe_id}
								</p>
							</div>
						</div>
						<div className='user-wrapper user2-img-wrapper'>
							<div className='user2-wrapper'>
								<div className='modal-username user2-username'>
									<p className='shifted-text'>
										{animationData.current.users.user2.username}
									</p>
								</div>
								<div className='outer-img-wrapper'>
									<div className='modal-user-img-wrapper user2-img-wrapper'>
										<img
											className='modal-user-img'
											src={animationData.current.users.user2.profile_img}
											alt=''
										/>
									</div>
								</div>
								<div className='modal-user-id user2-vibe-id'>
									<p className='shifted-text'>
										ID: {animationData.current.users.user2.vibe_id}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='modal-percentage-container'>
						<p className='modal-match-title'>Match Percent</p>
						<div className='modal-match-percent-wrapper'>
							<p className='modal-match-percent shifted-text'>
								{animationData.current.match_profile.match_percent}
							</p>
							<p className='modal-match-percent-symbol'>%</p>
						</div>
					</div>
				</div>

				<div className='modal-match-data'>
					<div className='modal-genres-data'>
						<h3 className='modal-matching-title shifted-text'>
							Matching Genres
						</h3>
						<ul className='list'>
							{animationData.current.match_profile.matching_genres.length >
							0 ? (
								animationData.current.match_profile.matching_genres.map(
									(genre, index) => (
										<li key={index} className='list-item shifted-text'>
											{genre}
										</li>
									)
								)
							) : (
								<li className='shifted-text'>None &nbsp; ☹</li>
							)}
						</ul>
					</div>
					<div className='modal-artists-data'>
						<h3 className='modal-matching-title shifted-text'>
							Matching Artists
						</h3>
						<ul className='list'>
							{animationData.current.match_profile.matching_artists.length >
							0 ? (
								animationData.current.match_profile.matching_artists.map(
									({ artist_name }, index) => (
										<li key={index} className='list-item shifted-text'>
											{artist_name}
										</li>
									)
								)
							) : (
								<li className='shifted-text'>None &nbsp; ☹</li>
							)}
						</ul>
					</div>
					<div className='modal-songs-data'>
						<h3 className='modal-matching-title shifted-text'>
							Matching Songs
						</h3>
						<ul className='list'>
							{animationData.current.match_profile.matching_songs.length > 0 ? (
								animationData.current.match_profile.matching_songs.map(
									({ song_name }, index) => (
										<li key={index} className='list-item shifted-text'>
											{song_name}
										</li>
									)
								)
							) : (
								<li className='shifted-text'>None &nbsp; ☹</li>
							)}
						</ul>
					</div>
				</div>
			</div>
			<img
				className='spin-burst-modal spin-burst-modal-1'
				src={spinBurst}
				alt=''
			/>
			<img
				className='spin-burst-modal spin-burst-modal-2'
				src={spinBurst}
				alt=''
			/>

			<img
				className='spin-burst-modal spin-burst-modal-3'
				src={spinBurst}
				alt=''
			/>
			<img className='stiple-modal stiple-modal-1' src={stiple1} alt='' />
			<img className='stiple-modal stiple-modal-2' src={stiple2} alt='' />
			<img className='stiple-modal stiple-modal-3' src={stiple3} alt='' />
			<img className='stiple-modal stiple-modal-4' src={stiple4} alt='' />
		</div>
	);
}
