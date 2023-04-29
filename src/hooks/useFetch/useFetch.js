import { useState } from 'react';
import axios from 'axios';

export default function useFetcher(currentInputValue) {
	const defaultUrl =
		process.env.NODE_ENV === 'production'
			? 'https://vibecheck-backend-production.up.railway.app/getuser/'
			: 'http://localhost:5000/getuser/';

	const [searchResults, setSearchResults] = useState({
		data: [],
		success: true,
		loading: true,
	});

	async function getSearchResults(value) {
		console.log(currentInputValue.current, value);
		const url = defaultUrl + value;
		if (url && url !== defaultUrl) {
			setSearchResults({
				data: searchResults.data,
				success: true,
				loading: true,
			});
			const res = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (currentInputValue.current === value) {
				setSearchResults({
					data: res.data.data,
					success: res.data.success,
					loading: false,
				});
			}
		} else if (url) {
			setSearchResults({
				data: [],
				success: true,
				loading: true,
			});
		}
	}

	return [searchResults, getSearchResults];
}
