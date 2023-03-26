import React from 'react';
import Background from '../background/Background';
import './homepage.css';

function Home() {
	function redirectToSpotify() {
		const url =
			process.env.NODE_ENV === 'production'
				? 'https://vibecheck-8lua.onrender.com/login'
				: 'http://localhost:5000/login';
		window.location.replace(url);
	}

	return (
		<div className='homepage'>
			<Background>
				<div className='content homepage-content'>
					<h1 className='homepage-heading'>VIBECHECK</h1>
					<p className='homepage-subtext'>Check your music compatibility</p>
					<button className='button' onClick={() => redirectToSpotify()}>
						GET STARTED
					</button>
				</div>
			</Background>
		</div>
	);
}

export default Home;
