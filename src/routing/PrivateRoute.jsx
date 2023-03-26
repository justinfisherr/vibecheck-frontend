import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, responseData}) {
	const queryParameters = new URLSearchParams(window.location.search);
	const token = queryParameters.get('token');
	return token ? children : <Navigate to='/' />;
}

export default PrivateRoute;