import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { authContext } from "../context/authContext";

function PrivateRoute({ children }) {
	const auth = useContext(authContext);
	const queryParameters = new URLSearchParams(window.location.search);
	const urlUsername = queryParameters.get("username");
	const urlUserImg = queryParameters.get("profile_img");
	const urlVibeId = queryParameters.get("vibe_id");
	const compareWith = queryParameters.get("compare_with");
	const invite = queryParameters.get("invite");

	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem("userData"))
	);

	if (invite) {
		localStorage.setItem(
			"invite",
			JSON.stringify({ otherVibeId: compareWith })
		);
		if (!userData) {
			const url =
				process.env.NODE_ENV === "production"
					? "https://vibecheck-backend-production-8135.up.railway.app/login"
					: "http://localhost:5000/login";
			window.location.replace(url);
		}
	}

	useEffect(() => {
		if (urlVibeId && !userData) {
			auth.current = true;
			const data = {
				username: urlUsername,
				userImg: urlUserImg,
				vibeId: urlVibeId,
			};
			localStorage.setItem("userData", JSON.stringify(data));
			setUserData(data);
		} else if (userData) {
			auth.current = true;
		}
	}, []);

	if (urlVibeId) {
		auth.current = true;
	}

	return auth.current || userData ? children : <Navigate to="/" />;
}

export default PrivateRoute;
