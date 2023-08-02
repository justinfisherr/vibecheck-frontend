import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useSubmitVibeId(
	setUserData,
	setLoading,
	setVibeId,
	setActive,
	setError
) {
	const [state, setState] = useState(null);

	const defaultUrl =
		process.env.NODE_ENV === 'production'
			? 'https://vibecheck-backend.cyclic.app/changeID'
			: 'http://localhost:5000/changeID';

	useEffect(() => {
		const sendRequest = async () => {
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
					setVibeId(state.newId);
					setUserData(userData);
					localStorage.setItem('userData', JSON.stringify(userData));
					setLoading(false);
					setActive('Saved');
				})
				.catch((error) => {
					setError(true);
					setTimeout(() => {
						setError(false);
					}, 2000);
					setActive(error.response.data.message);
					setLoading(false);
				});
		};
		if (state) {
			sendRequest();
		}
	}, [state]);

	return setState;
}
