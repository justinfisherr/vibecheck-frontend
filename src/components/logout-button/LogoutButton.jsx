import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './logout-button.css';

export default function LogoutButton() {
	const [logout, setLogout] = useState(false);
	const allowLogout = useRef(false);

	useEffect(() => {
		if (allowLogout.current) {
			const url =
				process.env.NODE_ENV === 'production'
					? 'https://vibecheck-backend.onrender.com/log-out'
					: 'http://localhost:5000/log-out';

			axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			allowLogout.current = false;
			setLogout(false);
		}
	}, [logout]);

	function handleLogout(event) {
		event.preventDefault();
		allowLogout.current = true;
		setLogout(true);
	}

	return (
		<button
			className='button logout-button'
			onClick={(event) => handleLogout(event)}>
			LOGOUT
		</button>
	);
}
