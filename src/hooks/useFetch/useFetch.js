import axios from "axios";

export default function useFetcher(setSearchLoading, setSearchResults) {
	const defaultUrl =
		process.env.NODE_ENV === "production"
			? "https://vibecheck-backend-production-8135.up.railway.app/getuser/"
			: "http://localhost:5000/getuser/";

	async function getSearchResults(value) {
		const url = defaultUrl + value;
		if (url !== defaultUrl) {
			axios
				.get(url, {
					headers: {
						"Content-Type": "application/json",
					},
				})
				.then((res) => {
					setSearchResults(res.data.data);
				})
				.catch(() => {
					setSearchResults([]);
				})
				.finally(() => {
					setSearchLoading(false);
				});
		}
	}

	return getSearchResults;
}
