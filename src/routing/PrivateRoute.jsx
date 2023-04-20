import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { authContext } from '../context/authContext';

function PrivateRoute({ children, responseData }) {
	const auth = useContext(authContext);
	const queryParameters = new URLSearchParams(window.location.search);
	const urlUsername = queryParameters.get('username');
	const urlUserImg = queryParameters.get('profile_img');
	const urlVibeId = queryParameters.get('vibe_id');

	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem('userData'))
	);

	useEffect(() => {
		if (urlVibeId && !userData) {
			auth.current = true;
			const data = {
				username: urlUsername,
				userImg: urlUserImg,
				vibeId: urlVibeId,
			};
			localStorage.setItem('userData', JSON.stringify(data));
			setUserData(data);
		} else if (userData) {
			auth.current = true;
		}
	}, []);

	if (urlVibeId) {
		auth.current = true;
	}

	return auth.current || userData ? children : <Navigate to='/' />;
}

export default PrivateRoute;
