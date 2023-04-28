import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSubmitVibeId(setUserData, setErrors, setLoading) {
	const [state, setState] = useState(null);

	const defaultUrl =
		process.env.NODE_ENV === 'production'
			? 'https://vibecheck-backend-production.up.railway.app/changeID'
			: 'http://localhost:5000/changeID';

	useEffect(() => {
		const sendRequest = async () => {
			setErrors(null);
			const body = {
				vibe_id: state.oldId,
				newID: state.newId,
			};
			const header = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			await axios
				.post(defaultUrl, body, header)
				.then(() => {
					const userData = JSON.parse(localStorage.getItem('userData'));
					userData.vibeId = state.newId;
					setUserData(userData);
					localStorage.setItem('userData', JSON.stringify(userData));
					setLoading(false);
				})
				.catch((error) => {
					setErrors(error.response.data.message);
					setLoading(false);
				});
		};
		if (state) {
			sendRequest();
		}
	}, [state]);

	return setState;
}
