import { useContext } from 'react';
import { animationContext } from '../../context/animationContext';
import axios from 'axios';

export default function useSubmit(username, setResponseData) {
	const defaultUrl =
		process.env.NODE_ENV === 'production'
			? 'https://vibecheck-backend-production.up.railway.app/compare/'
			: 'http://localhost:5000/compare/';

	// Context
	const animationData = useContext(animationContext);

	const sendRequest = async (chosenUser) => {
		const body = {
			my_username: username,
			other_username: chosenUser,
		};
		const header = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const res = await axios.post(defaultUrl, body, header);
		setResponseData(res.data.data);
		animationData.current = res.data.data;
		localStorage.setItem('animationData', JSON.stringify(res.data.data));
	};
	return sendRequest;
}
