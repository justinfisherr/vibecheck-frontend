import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetcher(currentInputValue) {
	const defaultUrl = 'http://localhost:5000/getuser/';
	const [state, setState] = useState({
		data: [],
		success: true,
		loading: true,
	});
	const [input, setInput] = useState(null);

	useEffect(() => {
		const url = defaultUrl + input;
		setState({
			data: state.data,
			success: true,
			loading: true,
		});
		const sendRequest = async () => {
			const res = await axios.get(url, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			if (currentInputValue.current === input) {
				setState({
					data: res.data.data,
					success: res.data.success,
					loading: false,
				});
			}
		};
		if (url && url !== defaultUrl) {
			sendRequest();
		} else if (url) {
			setState({
				data: [],
				success: true,
				loading: true,
			});
		}
	}, [input, setState]);

	return [state, setInput];
}
