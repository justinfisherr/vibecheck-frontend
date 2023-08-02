import { useContext } from 'react';
import axios from 'axios';

import { animationContext } from '../../context/animationContext';

export default function useSubmit(
	username,
	setResponseData,
	setExistsDisplayModal
) {
	const defaultUrl =
		process.env.NODE_ENV === 'production'
			? 'https://vibecheck-backend.cyclic.app/compare/'
			: 'http://localhost:5000/compare/';

	// Context
	const animationData = useContext(animationContext);

	function sendRequest(chosenUser) {
		const body = {
			my_username: username,
			other_username: chosenUser,
		};
		const header = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		axios
			.post(defaultUrl, body, header)
			.then((res) => {
				setResponseData(res.data.data);
				animationData.current = res.data.data;
				localStorage.setItem('animationData', JSON.stringify(res.data.data));
			})
			.catch(() => {
				setExistsDisplayModal(true);
			});
	}
	return sendRequest;
}
