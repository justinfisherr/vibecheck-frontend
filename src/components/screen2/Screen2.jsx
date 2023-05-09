import './screen2.css';

import React from 'react';

function Screen2({ genres, text }) {
	return (
		<div className='screen2-content'>
			<h1 className='screen2-title fade-in'>{text} Genres Are</h1>
			<ul className='genre-list'>
				{genres.map((genre, index) => (
					<li
						key={index}
						className={`genre-wrapper genre-wrapper-${index + 1}`}>
						<p className='genre-number'>#{index + 1}</p>
						<div className='genre-text-wrapper'>
							<div className={`genre-text genre-text-${index + 1}`}>
								{genre}
							</div>
							<p className='genre-info'>{genre}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Screen2;
