import React from 'react';
import './screen5.css';
import MatchPercent from '../match-percent/MatchPercent';

function Screen5({ animationData }) {
	return (
		<div className='screen5-content'>
			<h1 className='percent-screen-title  fade-in'>Match Percent is</h1>
			<MatchPercent animationData={animationData} />
		</div>
	);
}

export default Screen5;
